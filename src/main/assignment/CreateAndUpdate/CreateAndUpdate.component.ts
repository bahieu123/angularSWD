import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AddNewAssignment,
  GetAssignment,
  UpdateAssignment,
} from 'src/main/model/assignmentModel';
import { ListSubject } from 'src/main/model/models';
import { AssignmentServiceService } from 'src/service/AssignmentService.service';
import { SubjectServiceService } from 'src/service/subjectService.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-CreateAndUpdate',
  templateUrl: './CreateAndUpdate.component.html',
  styleUrls: ['./CreateAndUpdate.component.css'],
})
export class CreateAndUpdateComponent implements OnInit {
  assignmentId: number | undefined;
  listSubject: ListSubject[] = [];
  formGroup: FormGroup;
  inputCreate: AddNewAssignment = new AddNewAssignment();
  inputUpdate: UpdateAssignment = new UpdateAssignment();

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _subjectServiceService: SubjectServiceService,
    private _assignmentService: AssignmentServiceService
  ) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      subject_id: [null, Validators.required],
      description: [null, Validators.required],
      start_date: [null, Validators.required],
      created_by: [null, Validators.required],
    });
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      if (params['id']) {
        this.assignmentId = Number(params['id']);
      }
    });
    this.GetAllSubject();
    this.GetAssignment();
  }

  GetAllSubject(): void {
    this._subjectServiceService.getAllSubject().subscribe((result) => {
      this.listSubject = result;
      console.log(this.listSubject);
    });
  }

  GetAssignment(): void {
    this._assignmentService.detailAssignment(this.assignmentId).subscribe((result) => {
      this.inputUpdate = result;
      console.log(this.listSubject);
    });
  }


  saveAssignment(): void {
    debugger
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found. Please authenticate first.');
    }
    const decodedToken = jwtHelper.decodeToken(token);
    this.inputCreate.created_by = decodedToken.preferred_username;
    this.inputUpdate.updated_by = decodedToken.preferred_username;
    if (this.assignmentId) {
      this.inputUpdate.id = this.assignmentId;
      this._assignmentService
        .updateAssignment(this.inputUpdate)
        .subscribe(() => {
          this._router.navigate(['/main/assignment']);
        });
    } else {
      this._assignmentService
        .createAssignment(this.inputCreate)
        .subscribe(() => {
          this._router.navigate(['/main/assignment']);
        });
    }
  }


  back(): void {
    this._router.navigate(['main/assignment']);
  }
}
