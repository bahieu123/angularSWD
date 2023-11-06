import { Component, OnInit } from '@angular/core';
import { GetClassStudent } from '../model/classStudentModel';
import { ClassStudentServiceService } from 'src/service/ClassStudentService.service';

@Component({
  selector: 'app-classStudent',
  templateUrl: './classStudent.component.html',
  styleUrls: ['./classStudent.component.css'],
})
export class ClassStudentComponent implements OnInit {
  listClassStudent: GetClassStudent[] = [];

  constructor(private _classStudentServiceService: ClassStudentServiceService) {}

  ngOnInit() {
    this.getAllClass();
  }

  getAllClass(): void {
    this._classStudentServiceService.getAllClassStudent().subscribe((result: any) => {
      this.listClassStudent = result;
      console.log(this.listClassStudent);
    });
  }

  clear(): void {
    this.getAllClass();
  }
}
