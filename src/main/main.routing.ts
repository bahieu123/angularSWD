import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
      RouterModule.forChild([
          {path: 'main',component: MainComponent,
                children:[
                  {path:'dashboard',component: DashboardComponent},
                  {path:'user',component: UserComponent}
                ]
          }
      ])
  ],
  exports: [
      RouterModule
  ]
})

export class MainRoutingModel{}
