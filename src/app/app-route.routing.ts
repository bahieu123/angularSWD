
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/account/account.component';

import { MainComponent } from 'src/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/account/login', pathMatch: 'full' },
  {path: 'account',component:AccountComponent},
  {path: 'main',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
