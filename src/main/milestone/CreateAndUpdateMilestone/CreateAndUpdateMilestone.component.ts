import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetClass } from 'src/main/model/classModel';
import { ListMilestone, createMilestone } from 'src/main/model/models';
import { ListProject } from 'src/main/model/projectModel';
import { ClassServiceService } from 'src/service/ClassService.service';
import { MilestoneServiceService } from 'src/service/MilestoneService.service';
import { ProjectServiceService } from 'src/service/ProjectSerice.service';

@Component({
  selector: 'app-CreateAndUpdateMilestone',
  templateUrl: './CreateAndUpdateMilestone.component.html',
  styleUrls: ['./CreateAndUpdateMilestone.component.css']
})
export class CreateAndUpdateMilestoneComponent implements OnInit {
  milestoneId: number | undefined
  detailMilestone: ListMilestone = new ListMilestone();
  listClass: GetClass[] = [];
  ListProject: ListProject[]=[]
  createMilestone: createMilestone = new createMilestone();

  constructor(private _milestoneServiceService: MilestoneServiceService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _projectServiceService: ProjectServiceService,
    private _classServiceService: ClassServiceService
    ) {
      this._route.params.subscribe(params => {
        if(params['id']){
          this.milestoneId = Number(params['id']);
        }
      })
     }

  ngOnInit() {
    this.getDetailMilestone();
    this.GetAllProject();
    this.getAllClass();
  }

  getDetailMilestone(): void{
    this._milestoneServiceService.GetDetailMilestone(this.milestoneId)
    .subscribe((result) =>{
      this.detailMilestone = result;
    })
  }

  saveMilestone(form: NgForm): void{
    if(form.invalid){
      Object.keys(form.controls).forEach(key => {
        if(!form.controls[key].valid){
          form.controls[key].markAllAsTouched();
        }
      })
      return;}
     if(this.milestoneId){
       this._milestoneServiceService.UpdateMilestone(this.detailMilestone,this.milestoneId)
       .subscribe(() =>{
        this._router.navigate(['/main/milestone']);
       })
     }else{
      this.createMilestone.status = 1
      this._milestoneServiceService.CreateMilestone(this.createMilestone)
      .subscribe(() =>{
        this._router.navigate(['/main/milestone']);
      })
     }
  }

  back(): void{
    this._router.navigate(['/main/milestone']);
  }

  getAllClass(): void {
    this._classServiceService.getAllClass().subscribe((result: any) => {
      this.listClass = result;
      console.log("class"+this.listClass);
    });
  }

  GetAllProject(): void{
    this._projectServiceService.getAllProject()
    .subscribe((result) => {
      this.ListProject = result;
      console.log(this.ListProject)
    })
  }
}
