export interface UserSession {
  email: string;
  role: 'admin' | 'user';
  isAuthenticated: boolean;
}