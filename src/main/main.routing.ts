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

@NgModule({
  imports: [
      RouterModule.forChild([
          {path: 'main',component: MainComponent,
                children:[
                  {path:'dashboard',component: DashboardComponent},
                  {path:'user',component: UserComponent},
                  {path:'class',component: ClassComponent},
                  {path:'project',component: ProjectComponent},
                  {path:'subject',component: SubjectComponent},
                  {path:'subject/DetailSubject',component: CreateAndUpdateSubjectComponent},
                  {path:'assignment',component: AssignmentComponent},
                  {path:'student',component: ClassStudentComponent},

                ]
          }
      ])
  ],
  exports: [
      RouterModule
  ]
})

export class MainRoutingModel{}
