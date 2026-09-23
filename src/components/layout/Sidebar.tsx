import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, ClipboardList, FileQuestion, BarChart3, CalendarDays,
  Sparkles, Users, ShieldCheck, Settings, HelpCircle, GraduationCap, TrendingUp,
  Activity, ChevronLeft, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import type { Role } from "@/types";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const studentNav: NavItem[] = [
  { label: "Dashboard", href: "/student", icon: LayoutDashboard },
  { label: "AI Workspace", href: "/student/ai-workspace", icon: Sparkles },
  { label: "Courses", href: "/student/courses", icon: BookOpen },
  { label: "Assignments", href: "/student/assignments", icon: ClipboardList },
  { label: "Quizzes", href: "/student/quizzes", icon: FileQuestion },
  { label: "Performance", href: "/student/performance", icon: BarChart3 },
  { label: "Learning Path", href: "/student/learning-path", icon: TrendingUp },
  { label: "Calendar", href: "/student/calendar", icon: CalendarDays },
];

const teacherNav: NavItem[] = [
  { label: "Dashboard", href: "/teacher", icon: LayoutDashboard },
  { label: "Courses", href: "/teacher/courses", icon: BookOpen },
  { label: "Student Analytics", href: "/teacher/analytics", icon: BarChart3 },
  { label: "Attendance", href: "/teacher/attendance", icon: Activity },
  { label: "Quiz Generator", href: "/teacher/quiz-generator", icon: Sparkles },
];

const adminNav: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "User Management", href: "/admin/users", icon: Users },
  { label: "Department Analytics", href: "/admin/departments", icon: BarChart3 },
  { label: "AI Monitoring", href: "/admin/ai-monitoring", icon: ShieldCheck },
  { label: "Activity Logs", href: "/admin/logs", icon: Activity },
];

const bottomNav: NavItem[] = [
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Help Center", href: "/help", icon: HelpCircle },
];

export function Sidebar({ role }: { role: Role }) {
  const [collapsed, setCollapsed] = useState(false);
  const nav = role === "teacher" ? teacherNav : role === "admin" ? adminNav : studentNav;
  const base = role === "teacher" ? "/teacher" : role === "admin" ? "/admin" : "/student";

  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen shrink-0 flex-col border-r border-border bg-surface transition-all duration-200",
        collapsed ? "w-[72px]" : "w-64"
      )}
    >
      <div className="flex h-16 items-center gap-2 px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-white">
          <GraduationCap className="h-5 w-5" />
        </div>
        {!collapsed && <span className="text-base font-bold tracking-tight text-foreground">EduPulse</span>}
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2">
        {nav.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === base}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-ring",
                isActive
                  ? "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            <item.icon className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="space-y-0.5 border-t border-border px-3 py-3">
        {bottomNav.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-ring",
                isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            <item.icon className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-ring"
        >
          {collapsed ? <ChevronRight className="h-[18px] w-[18px]" /> : <ChevronLeft className="h-[18px] w-[18px]" />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
