import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-suaruamat',
  templateUrl: './suaruamat.component.html',
  styleUrls: ['./suaruamat.component.css']
})
export class SuaruamatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToCart() {
    this.router.navigate(['cart'])
  }

}
