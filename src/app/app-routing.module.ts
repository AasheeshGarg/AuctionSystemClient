import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductAuctionComponent } from './add-product-auction/add-product-auction.component';
import { LoginComponent } from './login/login.component';
import { ViewProductAuctionComponent } from './view-product-auction/view-product-auction.component';
import { BidComponent } from './bid/bid.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-login', pathMatch: 'full'},
  { path: 'app-login', component: LoginComponent },
  { path: 'app-add-product-auction', component: AddProductAuctionComponent },
  { path: 'app-view-product-auction', component: ViewProductAuctionComponent },
  { path: 'app-bid', component: BidComponent },
  { path: 'app-result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
