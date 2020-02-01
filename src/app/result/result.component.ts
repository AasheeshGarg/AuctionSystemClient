import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private sharedServ:SharedService,private route: ActivatedRoute, private router: Router) { }

  public user;

  ngOnInit() {
  }

  getResult() {
    this.sharedServ.getResult().subscribe((result) => {
      console.log(result);
      this.user = result;
    }, (err) => {
      console.log(err);
    });
  }
  
}
