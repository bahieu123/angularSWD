import { Component, OnInit } from '@angular/core';
import { ListMilestone } from '../model/models';
import { MilestoneServiceService } from 'src/service/MilestoneService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {
  listMilestone: ListMilestone[]=[]

  constructor( private _milestoneServiceService: MilestoneServiceService,
    private _router: Router) { }

  ngOnInit(): void {
    this.GetAllMilestone();
  }


  GetAllMilestone():void{
    this._milestoneServiceService.GetAllMilestone()
    .subscribe((result) => {
      this.listMilestone = result;
    })
  }

  clear():void{
    this.GetAllMilestone();
  }

  getInputValue(event: Event): string {
    if (event.target instanceof HTMLInputElement) {
      return event.target.value;
    }
    return '';
  }

  CreateSubject(): void{
    this._router.navigate(['/main/milestone/detail']);
  }

  DetailSubject(data: ListMilestone):void{
     this._router.navigate(['/main/milestone/detail',
     {
      id:data.id
     }
    ]);
  }

  DeleteMilestone(data: ListMilestone):void{
    this._milestoneServiceService.MilestoneDelete(data.id)
    .subscribe(() => {
      this.GetAllMilestone();
    })
  }
}
