/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssueSettingComponent } from './issueSetting.component';

describe('IssueSettingComponent', () => {
  let component: IssueSettingComponent;
  let fixture: ComponentFixture<IssueSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
