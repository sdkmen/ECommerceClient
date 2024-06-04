import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketCompleteOrderDialogComponent } from './basket-complete-order-dialog.component';

describe('BasketCompleteOrderDialogComponent', () => {
  let component: BasketCompleteOrderDialogComponent;
  let fixture: ComponentFixture<BasketCompleteOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketCompleteOrderDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketCompleteOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
