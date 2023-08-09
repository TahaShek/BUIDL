export interface SidebarItem {
  name: string;
  label: string;
  icon?: string;
  route?: string;
  subMenu?: SidebarItem[]; // Add subMenu property
}

export const sidebarMenuItems: SidebarItem[] = [
  {
    name: 'assets',
    label: 'Assets',
    icon: 'pi pi-home',
    subMenu: [
      {
        name:'dashboard',
        label: 'Dashboard',
        icon:'pi pi-home',
        route:'/items/dashboard',
      }
    ],
  },
  { name: 'stocks', label: 'Stocks', icon: 'pi pi-chart-bar', route: '/items/dashboard/check', },
  { name: 'account', label: 'Account', icon: 'pi pi-user', route: '/account' },
];
;
