import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from 'src/service/subjectService.service';
import { ListSubject } from '../model/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  listSubject: ListSubject[]=[]
  constructor(private _subjectServiceService: SubjectServiceService,
    private _router: Router) { }

  ngOnInit(): void {
    this.GetAllSubject();
  }

  GetAllSubject(): void{
    this._subjectServiceService.getAllSubject()
    .subscribe((result) => {
      this.listSubject = result;
      console.log(this.listSubject);
    })
  }

  clear(): void{
    this.GetAllSubject();
  }

  CreateSubject(): void{
    this._router.navigate(['/main/subject/DetailSubject']);
  }

  DetailSubject(data: ListSubject):void{
     this._router.navigate(['/main/subject/DetailSubject',
     {
      id:data.id
     }
    ]);
  }

  deleteSubject(data: ListSubject): void{
    this._subjectServiceService.SubjectDelete(data.id).subscribe(() => {
      this.GetAllSubject();
    })
  }
}
