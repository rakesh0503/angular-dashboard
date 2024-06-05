import { Component } from '@angular/core';
interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-dashboard';

  isSidenavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SidenavToggle) {
    this.isSidenavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
