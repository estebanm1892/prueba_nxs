export interface MenuItem {
  label: string;
  route: string;
  roles: ('admin' | 'user')[];
  icon?: string;
}