import ApplyValidation from "../../pages/02_ApplyValidation/ApplyValidation";
import RegisterFields from "../../pages/01_RegisterFields/RegisterFields";
import DefaultValues from "../../pages/03_DefaultValues/DefaultValues";
import SubscribeToInputChanges from "../../pages/04_SubscribeToInputChanges/SubscribeToInputChanges";
import ValidateFunction from "../../pages/05_ValidateFunction/ValidateFunction";
import ValueAs from "../../pages/06_ValueAs/ValueAs";

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
  {
    component: DefaultValues,
    label: 'Default Values',
    path: '/default-values',
  },
  {
    component: SubscribeToInputChanges,
    label: 'Subscribe To Input Changes',
    path: '/watch',
  },
  {
    component: ValidateFunction,
    label: 'Validate Function',
    path: '/validate-function',
  },
  {
    component: ValueAs,
    label: 'Value As',
    path: '/value-as',
  }
];
