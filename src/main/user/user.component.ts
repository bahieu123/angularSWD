import { Component, OnInit } from '@angular/core';
import { User } from '../model/userModel';
import { UserServiceService } from 'src/service/UserService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listUser: User[] = [];

  constructor(private _userServiceService: UserServiceService,
    private _router: Router) {}

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(): void {
    this._userServiceService.getAllUser().subscribe((result: any) => {
      this.listUser = result;
      console.log(this.listUser);
    });
  }

  clear(): void {
    this.getAllUser();
  }


  CreateUser(): void{
    this._router.navigate(['/main/user/DetailUser']);
  }

  DetailUser(data: User):void{
     this._router.navigate(['/main/user/DetailUser',
     {
      username:data.username
     }
    ]);
  }

}
