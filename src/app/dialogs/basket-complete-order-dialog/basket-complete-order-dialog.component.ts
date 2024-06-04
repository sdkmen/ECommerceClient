import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from '../base/base-dialog';

@Component({
  selector: 'app-basket-complete-order-dialog',
  templateUrl: './basket-complete-order-dialog.component.html',
  styleUrls: ['./basket-complete-order-dialog.component.scss'],
})
export class BasketCompleteOrderDialogComponent extends BaseDialog<BasketCompleteOrderDialogComponent> {
  constructor(
    dialogRef: MatDialogRef<BasketCompleteOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BasketCompleteOrderDeleteState
  ) {
    super(dialogRef);
  }
}

export enum BasketCompleteOrderDeleteState {
  Yes,
  No,
}
