import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from 'src/service/ProjectSerice.service';
import { ListProject, UpdateProject } from '../model/projectModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  ListProject: ListProject[]=[]
  constructor(private _ProjectServiceService: ProjectServiceService,
    private _router: Router) { }

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

  createProject(): void {
    this._router.navigate(['/main/project/createUpdate']);
  }

  updateProject(data: UpdateProject): void {
    this._router.navigate(['/main/project/createUpdate',
      {
        id: data.id
      }
    ]);
  }

  // deleteAssignment(id :number): void{
  //   this._ProjectServiceService.deleteAssignment(id).subscribe(() => {
  //     this.getAllAssignmnet();
  //   })
  // }

  clear(): void{
    this.GetAllProject();
  }
}