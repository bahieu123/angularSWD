import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AddProject, UpdateProject
} from 'src/main/model/projectModel';
import { GetClass } from 'src/main/model/classModel';
import { ProjectServiceService } from 'src/service/ProjectSerice.service';
import { ClassServiceService } from 'src/service/ClassService.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-CreateAndUpdate',
  templateUrl: './CreateAndUpdate.component.html',
  styleUrls: ['./CreateAndUpdate.component.css'],
})
export class CreateAndUpdateComponent implements OnInit {
  projectId: number | undefined;
  listClass: GetClass[] = [];
  formGroup: FormGroup;
  inputCreate: AddProject = new AddProject();
  inputUpdate: UpdateProject = new UpdateProject();

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _ProjectServiceService: ProjectServiceService,
    private _classService: ClassServiceService
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
        this.projectId = Number(params['id']);
      }
    });
    this.GetAllClass();
    this.GetProject();
  }

  GetAllClass(): void {
    this._classService.getAllClass().subscribe((result) => {
      this.listClass = result;
      console.log(this.listClass);
    });
  }

  GetProject(): void {
    this._ProjectServiceService.detailProject(this.projectId).subscribe((result) => {
      this.inputUpdate = result;
      console.log(this.listClass);
    });
  }


  saveProject(): void {
    debugger
    if (this.projectId) {
      this.inputUpdate.id = this.projectId;
      this._ProjectServiceService
        .updateProject(this.inputUpdate)
        .subscribe(() => {
          this._router.navigate(['/main/project']);
        });
    } else {
      this._ProjectServiceService
        .createProject(this.inputCreate)
        .subscribe(() => {
          this._router.navigate(['/main/project']);
        });
    }
  }


  back(): void {
    this._router.navigate(['main/projects']);
  }
}
