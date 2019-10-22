import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../service/home-service.service';
import { }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  newProducts:any;
  constructor(private router: Router,private home:HomeServiceService) { }

  ngOnInit() {
    const self= this;
    this.home.getData(1).subscribe(data=>{
      self.products = data;
    })
    this.home.getData(2).subscribe(data=>{
      self.newProducts = data;
    })
  }

  navigateToLogin(){
    this.router.navigate(['login'])
  }

  navigateToCart() {
    this.router.navigate(['cart'])
  }

}
