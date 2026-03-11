import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { UserSession } from '../models/user-session.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'session';
  private readonly platformId = inject(PLATFORM_ID);

  login(email: string, role: 'admin' | 'user'): void {
    if (!this.isBrowser()) {
      return;
    }

    const session: UserSession = {
      email,
      role,
      isAuthenticated: true
    };

    localStorage.setItem(this.storageKey, JSON.stringify(session));
  }

  logout(): void {
    if (!this.isBrowser()) {
      return;
    }

    localStorage.removeItem(this.storageKey);
  }

  getSession(): UserSession | null {
    if (!this.isBrowser()) {
      return null;
    }

    const session = localStorage.getItem(this.storageKey);
    return session ? JSON.parse(session) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getSession()?.isAuthenticated;
  }

  getRole(): 'admin' | 'user' | null {
    return this.getSession()?.role ?? null;
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
