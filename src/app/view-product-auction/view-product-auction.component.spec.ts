import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductAuctionComponent } from './view-product-auction.component';

describe('ViewProductAuctionComponent', () => {
  let component: ViewProductAuctionComponent;
  let fixture: ComponentFixture<ViewProductAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
