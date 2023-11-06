import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-route.routing';
import { AccountModule } from 'src/account/account.module';
import { MainModule } from 'src/main/main.module';
// primNG


@NgModule({
  declarations: [
    AppComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule
    // primNG

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
