import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { AddProductAuctionComponent } from './add-product-auction/add-product-auction.component';
import { ViewProductAuctionComponent } from './view-product-auction/view-product-auction.component';
import { BidComponent } from './bid/bid.component'
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddProductAuctionComponent,
    ViewProductAuctionComponent,
    BidComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
