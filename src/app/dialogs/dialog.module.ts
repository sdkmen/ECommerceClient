import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { SelectProductImageDialogComponent } from './select-product-image-dialog/select-product-image-dialog.component';
import { BasketItemRemoveDialogComponent } from './basket-item-remove-dialog/basket-item-remove-dialog.component';
import { BasketCompleteOrderDialogComponent } from './basket-complete-order-dialog/basket-complete-order-dialog.component';

@NgModule({
  declarations: [DeleteDialogComponent, SelectProductImageDialogComponent, BasketItemRemoveDialogComponent, BasketCompleteOrderDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FileUploadModule,
  ],
})
export class DialogModule {}
