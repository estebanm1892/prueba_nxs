import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'theme';

  constructor() {
    this.applyTheme(this.getTheme());
  }

  toggleTheme(): void {
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem(this.storageKey, theme);
    this.applyTheme(theme);
  }

  getTheme(): 'light' | 'dark' {
    const theme = localStorage.getItem(this.storageKey);
    return theme === 'dark' ? 'dark' : 'light';
  }

  applyTheme(theme: 'light' | 'dark'): void {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  }
}