import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateAndUpdateSubject, ListSubject, UpdateSubject } from 'src/main/model/models';
import { SubjectServiceService } from 'src/service/subjectService.service';

@Component({
  selector: 'app-CreateAndUpdateSubject',
  templateUrl: './CreateAndUpdateSubject.component.html',
  styleUrls: ['./CreateAndUpdateSubject.component.css']
})
export class CreateAndUpdateSubjectComponent implements OnInit {
   subjectId: number | undefined
   inputCreate: CreateAndUpdateSubject = new CreateAndUpdateSubject();
   inputUpdate: UpdateSubject = new UpdateSubject();
   formGroup: FormGroup;
   subjectDetail: ListSubject = new ListSubject();

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _subjectServiceService: SubjectServiceService
  ) {
    this._route.params.subscribe(params => {
      if(params['id']){
        this.subjectId = Number(params['id']);
      }
    })

    this.formGroup = this.formBuilder.group({
      manager_id: [null, Validators.required],
      subject_code: [null, Validators.required],
      subject_name: [null, Validators.required],
      description: [null, Validators.required],
      start_date: [null, Validators.required],
      created_by: null,
      created_date: null,
    });
  }

  ngOnInit() {
    if(this.subjectId){
      this.detailSubject();
    }
  }

  detailSubject():void{
    this._subjectServiceService.SubjectDetail(this.subjectId)
    .subscribe((result) =>{
      this.subjectDetail = result;
      console.log(this.subjectDetail);
    })
  }

  back(): void{
      this._router.navigate(['/main/subject']);
  }

  saveSubject(): void{

    if(this.subjectId){
      this.inputUpdate.manager_id = this.subjectId;
       this._subjectServiceService.UpdateSubject(this.inputUpdate)
       .subscribe(() =>{
        this._router.navigate(['/main/subject']);
      })
    }else{
      this._subjectServiceService.CreateSubject(this.inputCreate)
      .subscribe(() =>{
        this._router.navigate(['/main/subject']);
      })
    }
  }

}
