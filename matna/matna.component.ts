import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-matna',
  templateUrl: './matna.component.html',
  styleUrls: ['./matna.component.css']
})
export class MatnaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToCart() {
    this.router.navigate(['cart'])
  }
}
