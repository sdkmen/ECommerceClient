import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';
import { AuthorizeMenuDialogComponent } from './authorize-menu-dialog/authorize-menu-dialog.component';
import { AuthorizeUserDialogComponent } from './authorize-user-dialog/authorize-user-dialog.component';
import { BasketCompleteOrderDialogComponent } from './basket-complete-order-dialog/basket-complete-order-dialog.component';
import { BasketItemRemoveDialogComponent } from './basket-item-remove-dialog/basket-item-remove-dialog.component';
import { CompleteOrderDialogComponent } from './complete-order-dialog/complete-order-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { OrderDetailDialogComponent } from './order-detail-dialog/order-detail-dialog.component';
import { QrcodeDialogComponent } from './qrcode-dialog/qrcode-dialog.component';
import { QrcodeReadingDialogComponent } from './qrcode-reading-dialog/qrcode-reading-dialog.component';
import { SelectProductImageDialogComponent } from './select-product-image-dialog/select-product-image-dialog.component';

@NgModule({
  declarations: [
    DeleteDialogComponent,
    SelectProductImageDialogComponent,
    BasketItemRemoveDialogComponent,
    BasketCompleteOrderDialogComponent,
    OrderDetailDialogComponent,
    CompleteOrderDialogComponent,
    AuthorizeMenuDialogComponent,
    AuthorizeUserDialogComponent,
    QrcodeDialogComponent,
    QrcodeReadingDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FileUploadModule,
    MatTableModule,
    MatBadgeModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    NgxScannerQrcodeModule,
  ],
})
export class DialogModule {}
