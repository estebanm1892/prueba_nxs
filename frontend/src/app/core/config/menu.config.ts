import { MenuItem } from '../models/menu-item.model';

export const MENU_ITEMS: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', roles: ['admin', 'user'] },
    { label: 'Usuarios', route: '/users', roles: ['admin', 'user'] },
    { label: 'Pedidos', route: '/orders', roles: ['admin', 'user'] },
    { label: 'Pagos', route: '/payments', roles: ['admin'] },
    { label: 'API Pública', route: '/public-data', roles: ['admin'] }
];