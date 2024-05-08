import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/common/auth.service';
import { HttpClientService } from './services/common/http-client.service';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private toastrService: CustomToastrService,
    private router: Router,
    private httpClientService: HttpClientService
  ) {
    // httpClientService
    //   .put(
    //     {
    //       controller: 'baskets',
    //     },
    //     { basketItemId: '86ea95df-c01a-4cde-8dab-af56042731f3', quantity: 150 }
    //   )
    //   .subscribe((data) => {
    //     debugger;
    //   });

    authService.identityCheck();
  }

  signOut() {
    localStorage.removeItem('accessToken');
    this.authService.identityCheck();
    this.router.navigate(['']);
    this.toastrService.message('Successfully logged out', 'Session end', {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopRight,
    });
  }
}
