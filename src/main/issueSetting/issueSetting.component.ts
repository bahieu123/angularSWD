import { Component, OnInit } from '@angular/core';
import { GetIssueSetting } from '../model/issueSettingModel';
import { Router } from '@angular/router';
import { IssueSettingService } from 'src/service/IssueSettingService';

@Component({
  selector: 'app-issueSetting',
  templateUrl: './issueSetting.component.html',
  styleUrls: ['./issueSetting.component.css']
})
export class IssueSettingComponent implements OnInit {

  listIssueSetting: GetIssueSetting[] = [];

  constructor(private _issueSettingService: IssueSettingService, private _router: Router) {}

  ngOnInit() {
    this.getAllIssueSetting();
  }
  getAllIssueSetting(): void {
    this._issueSettingService.getAllIssueSetting().subscribe((result: any) => {
      this.listIssueSetting = result;
      console.log(this.listIssueSetting);
    });
  }
  getInputValue(event: Event): string {
    if (event.target instanceof HTMLInputElement) {
      return event.target.value;
    }
    return '';
  }
  clear(): void {
    this.getAllIssueSetting();
  }
  
}
