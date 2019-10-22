import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../service/auth.service";
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLogin: Boolean = true;
  authForm: FormGroup;
  invalid: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  get f() { return this.authForm.controls; }

  onSubmit() {
    if (this.showLogin) {
      this.onSubmitSignIn()
    } else {
      this.onSubmitSignUp()
    }
  }

  onSubmitSignIn() {
    console.log("Sign In");
    
    // if (this.authForm.invalid) {
    //   this.invalid = true
    //   return;
    // }
    this.authService.signin(this.f.email.value,
      this.f.password.value)
      .subscribe(status => {
        if (status) {
          this.router.navigate(['home'])
        }
      })
  }

  onSubmitSignUp() {
    console.log("Sign Up");
    // if (this.authForm.invalid) {
    //   this.invalid = true
    //   return;
    // }
    this.authService.signup(this.f.emailSignup.value,
      this.f.passwordSignup.value, this.f.firstName.value,
      this.f.lastName.value, "").subscribe(status => {
        console.log("Get Fired", status);
        if (status) {
          this.router.navigate(['home'])
        }
      })
    return false;
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailSignup: ['', Validators.required],
      passwordSignup: ['', Validators.required]
    });
  }

  toggle() {
    this.invalid = false
    this.showLogin = !this.showLogin
  }
}
