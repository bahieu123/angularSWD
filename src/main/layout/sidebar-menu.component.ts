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
        new ItemMenu('Setting','','bi bi-gear-fill'),
      ]
    }

    selectMenuItem(menu: ItemMenu): void {
      this.selectedMenuItem = menu;
    }

}
