import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Singup } from 'src/main/model/models';
import { AdminServiceService } from 'src/service/AdminService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  inputSingin: Singup = new Singup()
  constructor(
    private _adminServiceService: AdminServiceService,
    private _route: Router
    ) { }

  ngOnInit() {
  }

  singin(form: NgForm): void{
    if(form.invalid){
      Object.keys(form.controls).forEach(key => {
        if(!form.controls[key].valid){
          form.controls[key].markAllAsTouched();
        }
      })
      return;
    }
    this._adminServiceService.Singin(this.inputSingin)
    .subscribe((result) => {
      this._route.navigateByUrl('/account/login');
    })

  }

  backLogin(): void{
    this._route.navigate(['/account/login']);
  }
}
