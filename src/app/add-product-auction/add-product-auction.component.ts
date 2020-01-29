import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product-auction',
  templateUrl: './add-product-auction.component.html',
  styleUrls: ['./add-product-auction.component.css']
})
export class AddProductAuctionComponent implements OnInit {

  constructor(private sharedServ:SharedService,private route: ActivatedRoute, private router: Router) { }

  public productName;
  public description;
  public userId;
  public prodList;
  
  ngOnInit() {
  }

  createObject(){
    let data = {
      'productName' : this.productName,
      'description' : this.description,
      'user' : { 'userId' : 1 }
    }
    return data;
  }

  addProduct() {
    let data = this.createObject();
    console.log(data);
    this.sharedServ.addProduct(data).subscribe((result) => {
      console.log(result);
      alert("Product Added !!!");
    }, (err) => {
      console.log(err);
    });
  }

  getProduct() {
    this.sharedServ.getProducts().subscribe((result) => {
      console.log(result);
      this.prodList = result;
      alert("Product List");
    }, (err) => {
      console.log(err);
    });
  }

}
