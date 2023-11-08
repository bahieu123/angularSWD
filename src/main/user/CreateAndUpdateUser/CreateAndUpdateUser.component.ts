import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-CreateAndUpdateUser',
  templateUrl: './CreateAndUpdateUser.component.html',
  styleUrls: ['./CreateAndUpdateUser.component.css']
})
export class CreateAndUpdateUserComponent implements OnInit {
   username: string | undefined
  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      if(params['username']){
        this.username = String(params['username']);
      }
    })
  }

  back(): void{
      this._router.navigate(['/main/user']);
  }


}
