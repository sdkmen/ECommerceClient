import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketsModule } from './baskets/baskets.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordResetModule } from './password-reset/password-reset.module';
import { ProductsModule } from './products/products.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { UpdatePasswordModule } from './update-password/update-password.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    BasketsModule,
    HomeModule,
    RegisterModule,
    // LoginModule,
    PasswordResetModule,
    UpdatePasswordModule,
  ],
  exports: [BasketsModule],
})
export class ComponentsModule {}
