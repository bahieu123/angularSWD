
import { Component, Injector, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/service/AdminService.service';
import { AuthenticateModul, TokenData } from '../Moduls/AccountModuls';
import {  Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { finalize } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  singnupUsers: any[] = [];
  inputUserAndPass: AuthenticateModul = new AuthenticateModul();
  tokenData :TokenData=new TokenData();

  constructor(
    private _adminServiceService: AdminServiceService,
    private _route: Router
    )
  {
  }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if(form.invalid){
      Object.keys(form.controls).forEach(key => {
        if(!form.controls[key].valid){
          form.controls[key].markAllAsTouched();
        }
      })
      return;
    }
      this._adminServiceService.Authenticate(this.inputUserAndPass)
      .subscribe((result: any) => {
        // Giải mã token
        const jwtHelper = new JwtHelperService();
        const decodedToken = jwtHelper.decodeToken(result.accessToken);

          // Gán thông tin từ token vào service
        this.tokenData.userId = decodedToken.sub;
        this.tokenData.roles = decodedToken.rol;
        this.tokenData.username = decodedToken.preferred_username;
        this.tokenData.email = decodedToken.email;
        this.tokenData.name = decodedToken.name;

        // Lưu token vào local storage
        localStorage.setItem('token', result.accessToken);

        // Điều hướng tới trang /main/dashboard
        this._route.navigateByUrl('/main/dashboard');

      });
    }
}
