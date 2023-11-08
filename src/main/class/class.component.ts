import { Component, OnInit } from '@angular/core';
import { AuthenticateModul } from 'src/account/Moduls/AccountModuls';
import { ClassServiceService } from 'src/service/ClassService.service';
import { GetClass, UpdateClass } from '../model/classModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  listClass: GetClass[] = [];

  constructor(private _classServiceService: ClassServiceService, private _router: Router) {}

  ngOnInit() {
    this.getAllClass();
  }

  getAllClass(): void {
    this._classServiceService.getAllClass().subscribe((result: any) => {
      this.listClass = result;
    });
  }

  createClass(): void {
    this._router.navigate(['/main/class/createUpdate']);
  }

  updateClass(data: UpdateClass): void {
    this._router.navigate(['/main/class/createUpdate',
      {
        id: data.id
      }
    ]);
  }

  deleteClass(id: number): void {
    this._classServiceService.deleteClass(id).subscribe(() => {
      this.getAllClass();
    })
  }

  clear(): void {
    this.getAllClass();
  }
}
