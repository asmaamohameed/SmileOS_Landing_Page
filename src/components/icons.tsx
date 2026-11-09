import {
  Banknote,
  BarChart3,
  CalendarDays,
  FlaskConical,
  Grid3x3,
  LayoutDashboard,
  ListChecks,
  Package,
  Pill,
  Receipt,
  ScrollText,
  UserCheck,
  UserCog,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  analytics: BarChart3,
  dashboard: LayoutDashboard,
  patients: Users,
  appointments: CalendarDays,
  "treatment-plan": Grid3x3,
  prescriptions: Pill,
  treasury: Wallet,
  billing: Receipt,
  invoice: Receipt,
  expenses: Banknote,
  inventory: Package,
  lab: FlaskConical,
  staff: UserCog,
  activity: ScrollText,
  arrival: UserCheck,
  services: ListChecks,
};

export function KeyIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? LayoutDashboard;
  return <Icon className={className} aria-hidden="true" />;
}
