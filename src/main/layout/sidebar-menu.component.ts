import {Component, OnInit} from '@angular/core';
import { ItemMenu } from '../shared/ItemMenu';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './sidebar-menu.component.html'
})
export class SidebarMenuComponent implements OnInit {
    menuItems: ItemMenu[] | undefined;
    selectedMenuItem: ItemMenu | null = null;

    constructor() {}

    ngOnInit(): void {
      this.menuItems = this.getMenuItem();
    }

    getMenuItem(): ItemMenu[] {
      return [
        new ItemMenu('Dashboard','/main/dashboard','bi bi-menu-button-wide'),
        new ItemMenu('User','/main/user','bi bi-people'),
        new ItemMenu('Class','/main/class','bi bi-backpack4'),
        new ItemMenu('Class Student','/main/student','bi bi-backpack3-fill'),
        new ItemMenu('Assignment','/main/assignment','bi bi-book'),
        new ItemMenu('Project','/main/project','bi bi-columns'),
        new ItemMenu('Subject','/main/subject','bi bi-amd'),
        new ItemMenu('Milestone','/main/milestone','bi bi-box-seam-fill'),
        new ItemMenu('Issue', '/main/issue', 'bi bi-exclamation-octagon'),
        new ItemMenu('IssueSetting', '/main/issueSetting', 'bi bi-gear-wide'),
        new ItemMenu('Setting','','bi bi-gear-fill'),
        


      ]
    }

    selectMenuItem(menu: ItemMenu): void {
      this.selectedMenuItem = menu;
    }

}
