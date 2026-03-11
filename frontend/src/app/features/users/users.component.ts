import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from '../../shared/components/app-layout/app-layout.component';
import { UsersService } from '../../core/services/users.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-users',
  imports: [CommonModule, AppLayoutComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = true;
  error = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
        this.loading = false;
      },
      error: () => {
        this.error = 'No fue posible cargar los usuarios.';
        this.loading = false;
      }
    });
  }
}