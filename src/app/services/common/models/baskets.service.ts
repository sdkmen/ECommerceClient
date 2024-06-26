import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Create_Basket_Item } from 'src/app/contracts/basket/create_basket_item';
import { List_Basket_Item } from 'src/app/contracts/basket/list_basket_item';
import { Update_Basket_Item } from 'src/app/contracts/basket/update_basket_item';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root',
})
export class BasketsService {
  constructor(private httpClientService: HttpClientService) {}
  async get(): Promise<List_Basket_Item[]> {
    const observable: Observable<List_Basket_Item[]> =
      this.httpClientService.get({ controller: 'baskets' });

    return await firstValueFrom(observable);
  }

  async add(basketItem: Create_Basket_Item) {
    const observable: Observable<any> = this.httpClientService.post(
      {
        controller: 'baskets',
      },
      basketItem
    );

    await firstValueFrom(observable);
  }

  async updateQuantity(basketItem: Update_Basket_Item) {
    const observable: Observable<any> = this.httpClientService.put(
      {
        controller: 'baskets',
      },
      basketItem
    );

    await firstValueFrom(observable);
  }

  async remove(basketItemId: string) {
    const observable: Observable<any> = this.httpClientService.delete(
      {
        controller: 'baskets',
      },
      basketItemId
    );

    await firstValueFrom(observable);
  }
}
