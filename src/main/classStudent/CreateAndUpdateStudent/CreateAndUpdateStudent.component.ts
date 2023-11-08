import { Component, OnInit } from '@angular/core';
import { AddNewClassStudent, UpdateClassStudent } from 'src/main/model/classStudentModel';
import { User } from 'src/main/model/userModel';
import { ClassStudentServiceService } from 'src/service/ClassStudentService.service';
import { UserServiceService } from 'src/service/UserService.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassServiceService } from 'src/service/ClassService.service';
import { GetClass } from 'src/main/model/classModel';

@Component({
  selector: 'app-CreateAndUpdateStudent',
  templateUrl: './CreateAndUpdateStudent.component.html',
  styleUrls: ['./CreateAndUpdateStudent.component.css']
})
export class CreateAndUpdateStudentComponent implements OnInit {
  studentId: number | undefined;
  ListUser: User[] = [];
  ListClass: GetClass[] = [];
  formGroup: FormGroup;
  inputCreate: AddNewClassStudent = new AddNewClassStudent();
  inputUpdate: UpdateClassStudent = new UpdateClassStudent();

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _classStudentService: ClassStudentServiceService,
    private _userService: UserServiceService,
    private _classService: ClassServiceService
  ) {
    this.formGroup = this.formBuilder.group({
      class_id: [null, Validators.required],
      student_id: [null, Validators.required],
      status: [null, Validators.required],
      created_by: [null, Validators.required],
    });
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      if (params['id']) {
        this.studentId = Number(params['id']);
      }
    });
    this.GetAllUser();
    this.GetAllClass();
    this.GetStudent();
  }

  GetAllUser(): void {
    debugger
    this._classService.getAllClass().subscribe((result) => {
      this.ListClass = result;
    });
  }

  GetAllClass(): void {
    debugger
    this._userService.getAllUser().subscribe((result) => {
      this.ListUser = result;
    });
  }


  GetStudent(): void {
    this._classStudentService.detailStudent(this.studentId).subscribe((result) => {
      this.inputUpdate = result;
    });
  }


  saveStudent(): void {
    debugger
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    const decodedToken = jwtHelper.decodeToken(token);
    this.inputCreate.created_by = decodedToken.preferred_username;
    this.inputUpdate.updated_by = decodedToken.preferred_username;
    if (this.studentId) {
      this.inputUpdate.id = this.studentId;
      this._classStudentService
        .updateStudent(this.inputUpdate)
        .subscribe(() => {
          this._router.navigate(['/main/student']);
        });
    } else {
      debugger
      if (this.inputCreate.status == null) {
        this.inputCreate.status = 1;
      }
      this._classStudentService
        .createStudent(this.inputCreate)
        .subscribe(() => {
          this._router.navigate(['/main/student']);
        });
    }
  }


  back(): void {
    this._router.navigate(['main/student']);
  }
}
