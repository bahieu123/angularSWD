import { Component, OnInit } from '@angular/core';
import { GetClassStudent, UpdateClassStudent } from '../model/classStudentModel';
import { ClassStudentServiceService } from 'src/service/ClassStudentService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classStudent',
  templateUrl: './classStudent.component.html',
  styleUrls: ['./classStudent.component.css'],
})
export class ClassStudentComponent implements OnInit {
  listClassStudent: GetClassStudent[] = [];

  constructor(private _classStudentServiceService: ClassStudentServiceService, private _router: Router) { }

  ngOnInit() {
    this.getAllClass();
  }

  getAllClass(): void {
    this._classStudentServiceService.getAllClassStudent().subscribe((result: any) => {
      this.listClassStudent = result;
      console.log(this.listClassStudent);
    });
  }

  createStudent(): void {
    this._router.navigate(['/main/student/createUpdate']);
  }

  updateStudent(data: UpdateClassStudent): void {
    this._router.navigate(['/main/student/createUpdate',
      {
        id: data.id
      }
    ]);
  }

  deleteStudent(id: number): void {
    this._classStudentServiceService.deleteStudent(id).subscribe(() => {
      this.getAllClass();
    })
  }

  clear(): void {
    this.getAllClass();
  }
}
