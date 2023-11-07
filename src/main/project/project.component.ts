import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from 'src/service/ProjectService.service';
import { ListProject } from '../model/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  ListProject: ListProject[]=[]
  constructor(private _ProjectServiceService: ProjectServiceService) { }

  ngOnInit(): void {
    this.GetAllProject();
  }

  GetAllProject(): void{
    this._ProjectServiceService.getAllProject()
    .subscribe((result) => {
      this.ListProject = result;
      console.log(this.ListProject);  
    })
  }

  clear(): void{
    this.GetAllProject();
  }
}
