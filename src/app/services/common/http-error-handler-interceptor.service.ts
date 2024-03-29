import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from '../ui/custom-toastr.service';
import { UserAuthService } from './models/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerInterceptorService implements HttpInterceptor {
  constructor(
    private toastrService: CustomToastrService,
    private userAuthService: UserAuthService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        switch (error.status) {
          case HttpStatusCode.Unauthorized:
            this.toastrService.message(
              'unauthorized error caught',
              'unauthorized',
              {
                messageType: ToastrMessageType.Warning,
                position: ToastrPosition.BottomFullWidth,
              }
            );

            this.userAuthService
              .refreshTokenLogin(localStorage.getItem('refreshToken'))
              .then((data) => {});
            break;
          case HttpStatusCode.InternalServerError:
            this.toastrService.message(
              'internal server error caught',
              'InternalServerError',
              {
                messageType: ToastrMessageType.Warning,
                position: ToastrPosition.BottomFullWidth,
              }
            );
            break;
          case HttpStatusCode.BadRequest:
            this.toastrService.message(
              'badrequest error caught',
              'BadRequest',
              {
                messageType: ToastrMessageType.Warning,
                position: ToastrPosition.BottomFullWidth,
              }
            );
            break;
          case HttpStatusCode.NotFound:
            this.toastrService.message('notfound error caught', 'NotFound', {
              messageType: ToastrMessageType.Warning,
              position: ToastrPosition.BottomFullWidth,
            });
            break;
          default:
            this.toastrService.message('unexpected error caught', 'error', {
              messageType: ToastrMessageType.Warning,
              position: ToastrPosition.BottomFullWidth,
            });
            break;
        }
        return of(error);
      })
    );
  }
}
