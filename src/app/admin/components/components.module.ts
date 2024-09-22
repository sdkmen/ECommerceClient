import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorizeMenuModule } from './authorize-menu/authorize-menu.module';
import { CustomersModule } from './customers/customers.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    CustomersModule,
    OrdersModule,
    DashboardModule,
    AuthorizeMenuModule,
    RoleModule,
    UserModule,
  ],
})
export class ComponentsModule {}
