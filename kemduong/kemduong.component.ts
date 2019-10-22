import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kemduong',
  templateUrl: './kemduong.component.html',
  styleUrls: ['./kemduong.component.css']
})
export class KemduongComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToCart() {
    this.router.navigate(['cart'])
  }

}
