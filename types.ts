import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  tech_name: string;
  icon: LucideIcon;
  description: string;
  highlight_tag: string;
}

export interface SizeData {
  size: string;
  cm: string;
}

export interface NavLink {
  label: string;
  href: string;
}