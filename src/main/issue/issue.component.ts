import { Component, OnInit } from '@angular/core';
import { GetIssue, UpdateIssue } from '../model/issueModel';
import { IssueService } from 'src/service/IssueService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  listIssue: GetIssue[] = [];
  constructor(private _issueService: IssueService, private _router: Router) {}

  ngOnInit() {
    this.getAllIssue();
  }
  getAllIssue(): void {
    this._issueService.getAllIssue().subscribe((result: any) => {
      this.listIssue = result;
      console.log(this.listIssue);
    });
  }
  clear(): void {
    this.getAllIssue();
  }
  CreateIssue(): void{
    this._router.navigate(['/main/issue/createUpdate']);
  }

  updateIssue(data: UpdateIssue): void {
    this._router.navigate(['/main/issue/createUpdate',
      {
        id: data.id
      }
    ]);
  }
  deleteIssue(id :number): void{
    this._issueService.IssueDelete(id).subscribe(() => {
      this.getAllIssue();
    })
  }
  getInputValue(event: Event): string {
    if (event.target instanceof HTMLInputElement) {
      return event.target.value;
    }
    return '';
  }
}
