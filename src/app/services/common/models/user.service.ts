import { SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Token } from 'src/app/contracts/token/token';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';
import { Create_User } from 'src/app/contracts/users/create_user';
import { User } from 'src/app/entities/user';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from '../../ui/custom-toastr.service';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClientService: HttpClientService,
    private toastrService: CustomToastrService
  ) {}

  async create(user: User): Promise<Create_User> {
    const observable: Observable<Create_User | User> =
      this.httpClientService.post<Create_User | User>(
        {
          controller: 'users',
        },
        user
      );

    return (await firstValueFrom(observable)) as Create_User;
  }

  async updatePassword(
    userId: string,
    resetToken: string,
    password: string,
    passwordConfirm: string,
    successCallback?: () => void,
    errorCallback?: (error) => void
  ) {
    const observable: Observable<any> = this.httpClientService.post(
      {
        controller: 'users',
        action: 'update-password',
      },
      {
        userId: userId,
        resetToken: resetToken,
        password: password,
        passwordConfirm: passwordConfirm,
      }
    );

    const promiseData: Promise<any> = firstValueFrom(observable);
    promiseData
      .then((value) => successCallback())
      .catch((error) => errorCallback(error));
    await promiseData;
  }
}
