import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListRole, updateUser } from 'src/main/model/models';
import { User } from 'src/main/model/userModel';
import { UserServiceService } from 'src/service/UserService.service';

@Component({
  selector: 'app-CreateAndUpdateUser',
  templateUrl: './CreateAndUpdateUser.component.html',
  styleUrls: ['./CreateAndUpdateUser.component.css']
})
export class CreateAndUpdateUserComponent implements OnInit {
   username: string | undefined
   detailuser: User = new User();
   listRole: ListRole[]=[]
   updateuser: updateUser = new updateUser()
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userServiceService: UserServiceService
  ) { }

  ngOnInit() {
    this.listRole=[
    {id: 1,name: "Admin"},
    {id: 2,name: "User"}
    ]
    this._route.params.subscribe(params => {
      if(params['username']){
        this.username = String(params['username']);
      }
    })
    this.detailUser();
  }

  back(): void{
      this._router.navigate(['/main/user']);
  }

 detailUser():void{
   this._userServiceService.UserDetail(this.username)
   .subscribe((result)=>{
    this.detailuser = result;
    console.log(this.detailuser)
   })
 }

 saveUser(): void{
  if(this.username){
    this.updateuser.username = this.detailuser.username
    this.updateuser.email = this.detailuser.email
    this._userServiceService.UpdateMilestone(this.updateuser,this.username)
    .subscribe(()=>{
      this._router.navigate(['/main/user']);
    })
  }
 }

}
