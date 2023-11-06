import { Component, OnInit } from '@angular/core';
import { AuthenticateModul } from 'src/account/Moduls/AccountModuls';
import { ClassServiceService } from 'src/service/ClassService.service';
import { GetClass } from '../model/classModel';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  listClass: GetClass[] = [];

  constructor(private _classServiceService: ClassServiceService) {}

  ngOnInit() {
    this.getAllClass();
  }

  getAllClass(): void {
    this._classServiceService.getAllClass().subscribe((result: any) => {
      this.listClass = result;
      console.log(this.listClass);
    });
  }

  clear(): void {
    this.getAllClass();
  }
}
