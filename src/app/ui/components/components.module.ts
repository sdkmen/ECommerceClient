import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketsModule } from './baskets/baskets.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    BasketsModule,
    HomeModule,
    RegisterModule,
    // LoginModule
  ],
  exports: [BasketsModule],
})
export class ComponentsModule {}
