import {Component, OnInit} from '@angular/core';
import { ItemMenu } from '../shared/ItemMenu';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './sidebar-menu.component.html'
})
export class SidebarMenuComponent implements OnInit {
    menuItems: ItemMenu[] | undefined;

    constructor() {}

    ngOnInit(): void {
      this.menuItems = this.getMenuItem();
    }

    getMenuItem(): ItemMenu[] {
      return [
        new ItemMenu('Dashboard','/main/dashboard','bi bi-menu-button-wide'),
        new ItemMenu('User','','bi bi-people'),
        new ItemMenu('Setting','','bi bi-gear-fill'),

      ]
    }

}
