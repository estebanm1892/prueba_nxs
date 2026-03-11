import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { MenuItem } from '../../../core/models/menu-item.model';
import { MENU_ITEMS } from '../../../core/config/menu.config';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css'
})
export class AppLayoutComponent implements OnInit {
  @Input() pageTitle = '';
  filteredMenu: MenuItem[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const role = this.authService.getRole();
    this.filteredMenu = MENU_ITEMS.filter(item =>
      role ? item.roles.includes(role) : false
    );
  }
}