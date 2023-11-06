import { Component, OnInit } from '@angular/core';
import { AuthenticateModul } from 'src/account/Moduls/AccountModuls';
import { ClassServiceService } from 'src/service/ClassService.service';
import { ListClass } from '../model/models';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  constructor(private _classServiceService: ClassServiceService) { }
  listClass: ListClass[] = []
  ngOnInit() {
    this.getAllClass();
  }

  getAllClass(): void{
    this._classServiceService.getAllClasses()
    .subscribe((result: any) =>
    {
      this.listClass = result
      console.log(this.listClass)
    }
    )
  }

}
