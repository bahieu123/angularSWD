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
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CreateAndUpdateSubjectComponent } from './subject/CreateAndUpdateSubject/CreateAndUpdateSubject.component';
import { CreateAndUpdateComponent } from './assignment/CreateAndUpdate/CreateAndUpdate.component';
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
    ToolbarModule

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
    CreateAndUpdateComponent
  ]
})
export class MainModule { }
