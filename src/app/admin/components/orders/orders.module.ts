import { DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DeleteDirectiveModule } from 'src/app/directives/admin/delete.directive.module';
import { ListComponent } from './list/list.component';
import { OrdersComponent } from './orders.component';

@NgModule({
  declarations: [OrdersComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OrdersComponent }]),
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    DialogModule,
    DeleteDirectiveModule,
  ],
})
export class OrdersModule {}
