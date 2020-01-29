import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductAuctionComponent } from './add-product-auction.component';

describe('AddProductAuctionComponent', () => {
  let component: AddProductAuctionComponent;
  let fixture: ComponentFixture<AddProductAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
