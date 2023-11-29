import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Finance",
    href: "/sidebar2/finance",
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
  },
  {
    label: "Corporate",
    href: "/sidebar2/corporate",
    icon: <BuildingOfficeIcon className="w-6 h-6" />,
  },
  {
    label: "Compliance",
    href: "/sidebar2/compliance",
    icon: <CheckBadgeIcon className="w-6 h-6" />,
  },
  {
    label: "Human Resources",
    href: "/sidebar2/hr",
    icon: <UserIcon className="w-6 h-6" />,
  },
];