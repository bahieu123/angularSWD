import { SubjectServiceService } from 'src/service/subjectService.service';
import { User } from 'src/main/model/userModel';
import { ListSubject } from './../../model/models';
import { Component, OnInit } from '@angular/core';
import { GetSetting } from 'src/main/model/settingModel';
import { AddNewClass, UpdateClass } from 'src/main/model/classModel';
import { UserServiceService } from 'src/service/UserService.service';
import { SettingService } from 'src/service/Setting.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassServiceService } from 'src/service/ClassService.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-CreateAndUpdateClass',
  templateUrl: './CreateAndUpdateClass.component.html',
  styleUrls: ['./CreateAndUpdateClass.component.css']
})
export class CreateAndUpdateClassComponent implements OnInit {
  classId: number | undefined;
  ListUser: User[] = [];
  ListSubject: ListSubject[] = [];
  ListSetting: GetSetting[] = [];
  formGroup: FormGroup;
  inputCreate: AddNewClass = new AddNewClass();
  inputUpdate: UpdateClass = new UpdateClass();

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _subjectService: SubjectServiceService,
    private _userService : UserServiceService,
    private _settingService: SettingService,
    private _classService: ClassServiceService
  ) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      semester_id: [null, Validators.required],
      teacher_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      start_date: [null, Validators.required],
      end_date: [null, Validators.required],
      status: [null, Validators.required],
      created_by: [null, Validators.required],
    });
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      if (params['id']) {
        this.classId = Number(params['id']);
      }
    });
    this.GetAllUser();
    this.GetAllSubject();
    this.GetClass();
    this.GetAllSetting();
  }

  GetAllUser(): void {
    this._userService.getAllUser().subscribe((result) => {
      this.ListUser = result;
    });
  }

  GetAllSubject(): void {
    this._subjectService.getAllSubject().subscribe((result) => {
      this.ListSubject = result;
    });
  }

  GetAllSetting(): void {
    this._settingService.getAllSetting("CONFIG_SEMESTER").subscribe((result) => {
      this.ListSetting = result;
    });
  }


  GetClass(): void {
    this._classService.detailClass(this.classId).subscribe((result) => {
      this.inputUpdate = result;
    });
  }


  saveClass(): void {
    debugger
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    const decodedToken = jwtHelper.decodeToken(token);
    this.inputCreate.created_by = decodedToken.preferred_username;
    this.inputUpdate.updated_by = decodedToken.preferred_username;
    if (this.classId) {
      this.inputUpdate.id = this.classId;
      this._classService
        .updateClass(this.inputUpdate)
        .subscribe(() => {
          this._router.navigate(['/main/class']);
        });
    } else {
      debugger
      if (this.inputCreate.status == null) {
        this.inputCreate.status = 1;
      }
      this._classService
        .createClass(this.inputCreate)
        .subscribe(() => {
          this._router.navigate(['/main/class']);
        });
    }
  }

  back(): void {
    this._router.navigate(['main/class']);
  }
}
