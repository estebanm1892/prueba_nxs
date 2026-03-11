import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UsersComponent } from './features/users/users.component';
import { OrdersComponent } from './features/orders/orders.component';
import { PaymentsComponent } from './features/payments/payments.component';
import { PublicDataComponent } from './features/public-data/public-data.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin', 'user'] }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin', 'user'] }
  },
  {
    path: 'payments',
    component: PaymentsComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'public-data',
    component: PublicDataComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] }
  },

  { path: '**', redirectTo: 'login' }
];