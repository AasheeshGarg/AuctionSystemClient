import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  constructor(private sharedServ:SharedService,private route: ActivatedRoute, private router: Router) { }

  public bidValue;
  
  ngOnInit() {
  }

  createObject(){
    let data = {
      "bidValue" : this.bidValue,
      "bidStatus" : "CREATED",
      "date" : 1580151313,
      "auction" : { "auctionId" : 3 },
      "user" : { "userId" : 1 }
    }
    return data;
  }

  saveBid() {
    let data = this.createObject();
    console.log(data);
    this.sharedServ.saveBid(data).subscribe((result) => {
      console.log(result);
      alert("Bid Successfully Added !!!");
    }, (err) => {
      console.log(err);
    });
  }

}
