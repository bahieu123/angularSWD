import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ClassComponent } from './class/class.component';
import { ProjectComponent } from './project/project.component';
import { SubjectComponent } from './subject/subject.component';
import { ClassStudentComponent } from './classStudent/classStudent.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CreateAndUpdateSubjectComponent } from './subject/CreateAndUpdateSubject/CreateAndUpdateSubject.component';

import { CreateAndUpdateUserComponent } from './user/CreateAndUpdateUser/CreateAndUpdateUser.component';
import { CreateAndUpdateComponent } from './assignment/CreateAndUpdate/CreateAndUpdate.component';
import { CreateAndUpdateStudentComponent } from './classStudent/CreateAndUpdateStudent/CreateAndUpdateStudent.component';
import { CreateAndUpdateClassComponent } from './class/CreateAndUpdateClass/CreateAndUpdateClass.component';


import { MilestoneComponent } from './milestone/milestone.component';
import { CreateAndUpdateMilestoneComponent } from './milestone/CreateAndUpdateMilestone/CreateAndUpdateMilestone.component';
import { IssueComponent } from './issue/issue.component';
import { CreateAndUpdateIssueComponent } from './issue/CreateAndUpdateIssue/CreateAndUpdateIssue.component';
import { IssueSettingComponent } from './issueSetting/issueSetting.component';
//import { CreateAndUpdateComponent } from './assignment/CreateAndUpdate/CreateAndUpdate.component';
//import { CreateAndUpdateUserComponent } from './user/CreateAndUpdateUser/CreateAndUpdateUser.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'main', component: MainComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'user', component: UserComponent },
          { path: 'class', component: ClassComponent },
          { path: 'class/createUpdate', component: CreateAndUpdateClassComponent },
          { path: 'project', component: ProjectComponent },
          { path: 'subject', component: SubjectComponent },
          { path: 'subject/DetailSubject', component: CreateAndUpdateSubjectComponent },
          { path: 'assignment', component: AssignmentComponent },
          { path: 'assignment/createUpdate', component: CreateAndUpdateComponent },
          { path: 'student', component: ClassStudentComponent },
          { path: 'student/createUpdate', component: CreateAndUpdateStudentComponent },
          { path: 'user/DetailUser', component: CreateAndUpdateUserComponent },
          { path: 'milestone', component: MilestoneComponent },
          { path: 'milestone/detail', component: CreateAndUpdateMilestoneComponent },
          { path: 'issue', component: IssueComponent },
          { path: 'issue/createUpdate', component: CreateAndUpdateIssueComponent },
          { path: 'issueSetting', component: IssueSettingComponent },
          { path: 'user/detail', component: CreateAndUpdateUserComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class MainRoutingModel { }
