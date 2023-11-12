import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageOrderComponent } from './beverage-order.component';

describe('BeverageOrderComponent', () => {
  let component: BeverageOrderComponent;
  let fixture: ComponentFixture<BeverageOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeverageOrderComponent]
    });
    fixture = TestBed.createComponent(BeverageOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
