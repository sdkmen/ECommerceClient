import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasketsComponent } from './baskets.component';

@NgModule({
  declarations: [BasketsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BasketsComponent }]),
  ],
  exports: [BasketsComponent],
})
export class BasketsModule {}
