import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sharedServ:SharedService,private route: ActivatedRoute, private router: Router) { }

  public username;
  public password;
  public userType;
  ngOnInit() {
  }

  createObject(){
    let data = {
      'username' : this.username,
      'password' : this.password,
      'userType' : this.userType
    }
    return data;
  }

  signup() {
    let data = this.createObject();
    console.log(data);
    this.sharedServ.register(data).subscribe((result) => {
      console.log(result);
      if(data.username!=null && data.password!=null && data.userType == 'VENDOR') {
        alert("User Registered as Vendor");
      }
      else if(data.username!=null && data.password!=null && data.userType == 'CUSTOMER') {
        alert("User Registered as Customer");
      }
    }, (err) => {
      console.log(err);
    });
  }

  login() {
    let data = this.createObject();
    console.log(data);
    this.sharedServ.login(data).subscribe((result) => {
      console.log(result);
      if(result) {
        if(data.userType == 'VENDOR') {
          alert("User login as Vendor");
          this.router.navigate(['/app-add-product-auction']);
        }
        else if(data.userType == 'CUSTOMER'){
          alert("User login as Customer");
          this.router.navigate(['/app-view-product-auction']);
        }
      } 
      else
      alert("Invalid Username/Password");  
  }, (err) => {
    console.log(err);
  });
}

}
