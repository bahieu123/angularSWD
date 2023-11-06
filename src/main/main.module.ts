import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModel } from './main.routing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserComponent } from './user/user.component';
//layout

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModel,
    ModalModule.forChild()
  ],
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    SidebarMenuComponent,
    DashboardComponent,
    UserComponent
  ]
})
export class MainModule { }
