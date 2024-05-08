import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, catchError, of } from 'rxjs';
import { SpinnerType } from 'src/app/base/base.component';
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
    private userAuthService: UserAuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        switch (error.status) {
          case HttpStatusCode.Unauthorized:
            const url = this.router.url;

            this.userAuthService
              .refreshTokenLogin(
                localStorage.getItem('refreshToken'),
                (state) => {
                  if (!state) {
                    if (url == '/products')
                      this.toastrService.message(
                        'You need log in to add to basket',
                        'Please log in',
                        {
                          messageType: ToastrMessageType.Warning,
                          position: ToastrPosition.TopRight,
                        }
                      );
                    else
                      this.toastrService.message(
                        'unauthorized error caught',
                        'unauthorized',
                        {
                          messageType: ToastrMessageType.Warning,
                          position: ToastrPosition.BottomFullWidth,
                        }
                      );
                  }
                }
              )
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
        this.spinner.hide(SpinnerType.BallAtom);
        return of(error);
      })
    );
  }
}
