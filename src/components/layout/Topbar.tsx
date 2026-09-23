import { Search, Bell, Moon, Sun, LogOut, User as UserIcon, Settings as SettingsIcon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { Avatar } from "@/components/ui/Avatar";
import { Dropdown, DropdownItem } from "@/components/ui/Dropdown";
import { Badge } from "@/components/ui/Badge";
import { useNavigate } from "react-router-dom";
import { notifications } from "@/data/mock";
import { useState } from "react";
import { CommandPalette } from "./CommandPalette";

export function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-surface/80 px-6 backdrop-blur">
      <button
        onClick={() => setPaletteOpen(true)}
        className="flex w-full max-w-sm items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted-foreground hover:border-primary-300 focus-ring"
      >
        <Search className="h-4 w-4" />
        <span>Search courses, students, docs…</span>
        <kbd className="ml-auto rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium">⌘K</kbd>
      </button>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted focus-ring"
        >
          {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
        </button>

        <button
          onClick={() => navigate("/notifications")}
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted focus-ring"
        >
          <Bell className="h-[18px] w-[18px]" />
          {unread > 0 && (
            <Badge variant="danger" className="absolute -right-0.5 -top-0.5 h-4 min-w-4 justify-center px-1 text-[10px]">
              {unread}
            </Badge>
          )}
        </button>

        <Dropdown
          trigger={
            <button className="flex items-center gap-2 rounded-lg p-1 hover:bg-muted focus-ring">
              <Avatar name={user?.name || "Guest User"} color={user?.avatarColor} size="sm" />
            </button>
          }
        >
          <div className="px-2.5 py-2">
            <p className="text-sm font-semibold text-foreground">{user?.name || "Guest"}</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
          <div className="my-1 h-px bg-border" />
          <DropdownItem icon={<UserIcon className="h-4 w-4" />} onClick={() => navigate("/profile")}>
            Profile
          </DropdownItem>
          <DropdownItem icon={<SettingsIcon className="h-4 w-4" />} onClick={() => navigate("/settings")}>
            Settings
          </DropdownItem>
          <div className="my-1 h-px bg-border" />
          <DropdownItem
            icon={<LogOut className="h-4 w-4" />}
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="text-danger-600"
          >
            Log out
          </DropdownItem>
        </Dropdown>
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </header>
  );
}
