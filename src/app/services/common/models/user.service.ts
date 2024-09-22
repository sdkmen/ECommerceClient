import { SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Pagination_User } from 'src/app/contracts/pagination_user';
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

  async getAllUsers(
    page: number = 0,
    size: number = 5,
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<Pagination_User> {
    const observable: Observable<Pagination_User> = this.httpClientService.get({
      controller: 'users',
      queryString: `page=${page}&size=${size}`,
    });

    const promiseData = firstValueFrom(observable);
    promiseData
      .then((value) => successCallBack())
      .catch((error) => errorCallBack(error));

    return await promiseData;
  }

  async assignRoleToUser(
    id: string,
    roles: string[],
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ) {
    const observable: Observable<any> = this.httpClientService.post(
      {
        controller: 'users',
        action: 'assign-role-to-user',
      },
      { userId: id, roles: roles }
    );

    const promiseData = firstValueFrom(observable);
    promiseData
      .then((value) => successCallBack())
      .catch((error) => errorCallBack(error));

    await promiseData;
  }

  async getRolesToUser(
    userId: string,
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<string[]> {
    const observable: Observable<{ userRoles: string[] }> =
      this.httpClientService.get(
        {
          controller: 'users',
          action: 'get-roles-to-user',
        },
        userId
      );

    const promiseData = firstValueFrom(observable);
    promiseData
      .then((value) => successCallBack())
      .catch((error) => errorCallBack(error));

    return (await promiseData).userRoles;
  }
}
