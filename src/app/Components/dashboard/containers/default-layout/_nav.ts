import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'users',
    url: './users',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'apartments',
    url: './apartments',
    iconComponent: { name: 'cil-home' },
  },
  {
    name: 'Charts',
    url: './charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
];
