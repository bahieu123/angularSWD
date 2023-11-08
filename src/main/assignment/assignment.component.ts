import { Component, OnInit } from '@angular/core';
import { GetAssignment, UpdateAssignment } from 'src/main/model/assignmentModel';
import { AssignmentServiceService } from './../../service/AssignmentService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  listAssignment: GetAssignment[] = [];

  constructor(
    private _assignmentServiceService: AssignmentServiceService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllAssignmnet();
  }

  getAllAssignmnet(): void {
    this._assignmentServiceService
      .getAllAssignmnet()
      .subscribe((result: any) => {
        this.listAssignment = result;
        console.log(this.listAssignment);
      });
  }

  createAssignment(): void {
    this._router.navigate(['/main/assignment/createUpdate']);
  }

  updateAssignment(data: UpdateAssignment): void {
    this._router.navigate(['/main/assignment/createUpdate',
      {
        id: data.id
      }
    ]);
  }

  deleteAssignment(id :number): void{
    this._assignmentServiceService.deleteAssignment(id).subscribe(() => {
      this.getAllAssignmnet();
    })
  }

  getInputValue(event: Event): string {
    if (event.target instanceof HTMLInputElement) {
      return event.target.value;
    }
    return '';
  }

  clear(): void {
    this.getAllAssignmnet();
  }
}
