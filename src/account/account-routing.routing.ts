import {RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
      RouterModule.forChild([
          {path: 'account',component: AccountComponent,
                children:[
                  {path:'login',component: LoginComponent},
                  {path:'register',component: RegisterComponent},
                  {path:'changePassword',component: ChangePasswordComponent},

                ]
          }
      ])
  ],
  exports: [
      RouterModule
  ]
})

export class AccountRoutingModel{}
