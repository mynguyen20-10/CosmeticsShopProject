import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../service/home-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  data:any;
  constructor(private route:ActivatedRoute,private home:HomeServiceService) { }

  ngOnInit() {
    const self=this;
    let id = this.route.snapshot.params['id'];
    this.home.getDataWithID(id).subscribe(data=>{
      self.data = data;
    })
  }



}
