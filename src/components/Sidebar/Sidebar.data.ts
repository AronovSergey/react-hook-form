import ApplyValidation from "../../pages/ApplyValidation/ApplyValidation";
import RegisterFields from "../../pages/RegisterFields/RegisterFields";

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
  {
    component: ApplyValidation,
    label: 'Apply Validation',
    path: '/apply-validation',
  },
];
