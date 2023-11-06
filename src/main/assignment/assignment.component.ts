import { GetAssignment } from 'src/main/model/assignmentModel';
import { AssignmentServiceService } from './../../service/AssignmentService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  listAssignment: GetAssignment[] = [];

  constructor(private _assignmentServiceService: AssignmentServiceService) {}

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

  clear(): void {
    this.getAllAssignmnet();
  }
}
