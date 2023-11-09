import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateIssue, GetIssue, UpdateIssue } from 'src/main/model/issueModel';
import { IssueService } from 'src/service/IssueService';
import { __param } from 'tslib';

@Component({
  selector: 'app-CreateAndUpdateIssue',
  templateUrl: './CreateAndUpdateIssue.component.html',
  styleUrls: ['./CreateAndUpdateIssue.component.css']
})
export class CreateAndUpdateIssueComponent implements OnInit {
  issueId: number | undefined
  inputCreate: CreateIssue = new CreateIssue();
  inputUpdate: UpdateIssue = new UpdateIssue();
  formGroup: FormGroup;
  issueDetail: GetIssue = new GetIssue();
  ListIssue: GetIssue[] = [];

 constructor(
   private formBuilder: FormBuilder,
   private _router: Router,
   private _route: ActivatedRoute,
   private _issueService: IssueService,
   
    
 ) {
   this._route.params.subscribe(params => {
     if(params['id']){
       this.issueId = Number(params['id']);
     }
   })

   this.formGroup = this.formBuilder.group({
     project_id: [null, Validators.required],
     description: [null, Validators.required],
     status: null,
     type_id: [null, Validators.required],
     assigner_id: [null, Validators.required],
     assignee_id: [null, Validators.required],
     milestone_id: [null, Validators.required],
     status_id: [null, Validators.required],
     work_process: [null, Validators.required],
     created_by: null,
     created_date: null,
   });
 }

 ngOnInit() {
   if(this.issueId){
    this._route.params.subscribe()
     this.detailIssue();
   }
 }
 detailIssue():void{
  this._issueService.IssueDetail(this.issueId)
  .subscribe((result) =>{
    this.issueDetail = result;
    console.log(this.issueDetail);
  })
}
 getAllAssignee():void{
    
 }
back(): void{
    this._router.navigate(['/main/issue']);
}

saveIssue(): void{

  if(this.issueId){
    debugger
    this.inputUpdate.id = this.issueId;
    this.inputUpdate.project_id = 1;
    this.inputUpdate.status = 1;
    this.inputUpdate.type_id = '7';
    this.inputUpdate.assignee_id = 1;
    this.inputUpdate.assigner_id = 2;
    this.inputUpdate.milestone_id = 5;
    this.inputUpdate.status_id = 7;
    this.inputUpdate.work_process = '70%';
    this.inputUpdate.updated_by ='hieu3';
    this.inputUpdate.updated_date = new Date();
     this._issueService.UpdateIssue(this.inputUpdate)
     .subscribe(() =>{
      this._router.navigate(['/main/issue']);
    })
  }else{
   debugger
      this.inputCreate.project_id = 1;
      this.inputCreate.status = 1;
      this.inputCreate.type_id = '7';
      this.inputCreate.assignee_id =1;
      this.inputCreate.assigner_id =2;
      this.inputCreate.milestone_id =5;
      this.inputCreate.status_id = 7;
      this.inputCreate.work_process = '50%';
      this.inputCreate.created_by="John Doe";
      this.inputCreate.created_date = new Date();


    this._issueService.CreateIssue(this.inputCreate)
    .subscribe(() =>{
      this._router.navigate(['/main/issue']);
    })
  }
}
}
