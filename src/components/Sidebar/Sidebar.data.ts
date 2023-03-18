import RegisterFields from "../../pages/Register/RegisterFields";

export interface SidebarMenuItem {
  component: React.FC;
  label: string;
  path: string;
}

export const sidebarMenuItems: SidebarMenuItem[] = [
  {
    component: RegisterFields,
    label: 'Register Fields',
    path: '/register-fields',
  },
];
