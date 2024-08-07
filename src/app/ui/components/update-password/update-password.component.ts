import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import {
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';
import { UserAuthService } from 'src/app/services/common/models/user-auth.service';
import { UserService } from 'src/app/services/common/models/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private userAuthService: UserAuthService,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private userService: UserService,
    private router: Router
  ) {
    super(spinner);
  }

  response: any;

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.activatedRoute.params.subscribe({
      next: async (params) => {
        const resetToken: string = params['resetToken'];
        const userId: string = params['userId'];
        this.response = await this.userAuthService.verifyResetToken(
          resetToken,
          userId,
          () => {
            this.hideSpinner(SpinnerType.BallAtom);
          }
        );
      },
    });
  }

  updatePassword(password: string, passwordConfirm: string) {
    this.showSpinner(SpinnerType.BallAtom);
    if (password != passwordConfirm) {
      this.alertifyService.message('Passwords are not matched', {
        messageType: MessageType.Error,
        position: Position.TopRight,
      });
      return;
    }

    this.activatedRoute.params.subscribe({
      next: async (params) => {
        const resetToken: string = params['resetToken'];
        const userId: string = params['userId'];
        await this.userService.updatePassword(
          userId,
          resetToken,
          password,
          passwordConfirm,
          () => {
            this.alertifyService.message(
              'Password has been updated successfully',
              {
                messageType: MessageType.Success,
                position: Position.TopRight,
              }
            );
            this.router.navigate(['/login']);
          },
          (error) => {
            console.log(error);
          }
        );
        this.hideSpinner(SpinnerType.BallAtom);
      },
    });
  }
}
