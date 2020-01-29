import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product-auction',
  templateUrl: './view-product-auction.component.html',
  styleUrls: ['./view-product-auction.component.css']
})
export class ViewProductAuctionComponent implements OnInit {

  constructor(private sharedServ:SharedService,private route: ActivatedRoute, private router: Router) { }

  public prodList;
  
  ngOnInit() {
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

  startBid() {
    this.router.navigate(['/app-bid']);
  }

}
