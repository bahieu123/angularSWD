import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-CreateAndUpdateSubject',
  templateUrl: './CreateAndUpdateSubject.component.html',
  styleUrls: ['./CreateAndUpdateSubject.component.css']
})
export class CreateAndUpdateSubjectComponent implements OnInit {
   subjectId: number | undefined
  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      if(params['id']){
        this.subjectId = Number(params['id']);
      }
    })
  }

  back(): void{
      this._router.navigate(['/main/subject']);
  }


}
