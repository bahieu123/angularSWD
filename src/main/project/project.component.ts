import { Component, OnInit } from '@angular/core';
import { ProjectMemberServiceService } from 'src/service/ProjectMemberService.service';
import { ListProjectMember } from '../model/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  listProjectMember: ListProjectMember[]=[]
  constructor(private _ProjectMemberServiceService: ProjectMemberServiceService) { }

  ngOnInit(): void {
    this.GetAllProject();
  }

  GetAllProject(): void{
    this._ProjectMemberServiceService.getAllProjectMember()
    .subscribe((result) => {
      this.listProjectMember = result;
      console.log(this.listProjectMember);  
    })
  }

  clear(): void{
    this.GetAllProject();
  }
}
