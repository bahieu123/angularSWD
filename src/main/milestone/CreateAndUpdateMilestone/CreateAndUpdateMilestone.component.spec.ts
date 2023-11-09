/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateAndUpdateMilestoneComponent } from './CreateAndUpdateMilestone.component';

describe('CreateAndUpdateMilestoneComponent', () => {
  let component: CreateAndUpdateMilestoneComponent;
  let fixture: ComponentFixture<CreateAndUpdateMilestoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAndUpdateMilestoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndUpdateMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
