
import { Component, Injector, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/service/AdminService.service';
import { ResetPassword, TokenData } from '../Moduls/AccountModuls';
import {  Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { finalize } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  singnupUsers: any[] = [];
  ResetPassword: ResetPassword = new ResetPassword();
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
      this._adminServiceService.ChangePassword(this.ResetPassword)
      .subscribe((result: any) => {
    
        this._route.navigateByUrl('/main/login');

      });
    }


}
