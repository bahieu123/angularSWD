import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from 'src/service/subjectService.service';
import { ListSubject } from '../model/models';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  listSubject: ListSubject[]=[]
  constructor(private _subjectServiceService: SubjectServiceService) { }

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
}
