import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModel } from './main.routing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserComponent } from './user/user.component';
import { ClassComponent } from './class/class.component';
import { ProjectComponent } from './project/project.component';
import { SubjectComponent } from './subject/subject.component';
import { ClassStudentComponent } from './classStudent/classStudent.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//layout

// primng
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { CreateAndUpdateSubjectComponent } from './subject/CreateAndUpdateSubject/CreateAndUpdateSubject.component';

import { CreateAndUpdateComponent } from './assignment/CreateAndUpdate/CreateAndUpdate.component';

import { CreateAndUpdateStudentComponent } from './classStudent/CreateAndUpdateStudent/CreateAndUpdateStudent.component';
import { CreateAndUpdateClassComponent } from './class/CreateAndUpdateClass/CreateAndUpdateClass.component';


import { MilestoneComponent } from './milestone/milestone.component';
import { CreateAndUpdateMilestoneComponent } from './milestone/CreateAndUpdateMilestone/CreateAndUpdateMilestone.component';
//import { CreateAndUpdateComponent } from './assignment/CreateAndUpdate/CreateAndUpdate.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { CreateAndUpdateUserComponent } from './user/CreateAndUpdateUser/CreateAndUpdateUser.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MainRoutingModel,
    ModalModule.forChild(),
    //primng
    TableModule,
    ButtonModule,
    ToolbarModule,
    TriStateCheckboxModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    CheckboxModule

  ],
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    SidebarMenuComponent,
    DashboardComponent,
    UserComponent,
    ClassComponent,
    ProjectComponent,
    SubjectComponent,
    ClassStudentComponent,
    AssignmentComponent,
    CreateAndUpdateSubjectComponent,

    AssignmentComponent,
    CreateAndUpdateComponent,
    CreateAndUpdateStudentComponent,
    CreateAndUpdateClassComponent,

    MilestoneComponent,
    CreateAndUpdateMilestoneComponent,
    CreateAndUpdateComponent,
    CreateAndUpdateUserComponent

  ]
})
export class MainModule { }
