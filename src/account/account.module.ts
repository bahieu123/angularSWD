import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { AppRoutingModule } from 'src/app/app-route.routing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { AccountRoutingModel } from './account-routing.routing';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    // AppRoutingModule,
    ModalModule.forChild(),
    AccountRoutingModel
  ],
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
  ]
})
export class AccountModule { }
