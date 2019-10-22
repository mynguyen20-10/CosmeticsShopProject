import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToCart() {
    this.router.navigate(['cart'])
  }
}

