import { useState } from "react";
import { Bell, CheckCircle2, Info, AlertTriangle, AlertOctagon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";
import { notifications as initialNotifications } from "@/data/mock";
import type { Notification } from "@/types";

const iconMap = { info: Info, success: CheckCircle2, warning: AlertTriangle, danger: AlertOctagon };
const colorMap = { info: "#3b82f6", success: "#10b981", warning: "#f59e0b", danger: "#ef4444" };

export function NotificationCenter() {
  const [items, setItems] = useState<Notification[]>(initialNotifications);
  const unreadCount = items.filter((n) => !n.read).length;

  const markAllRead = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id: string) => setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Notifications</h1>
          <p className="mt-1 text-sm text-muted-foreground">{unreadCount} unread</p>
        </div>
        {unreadCount > 0 && <Button variant="secondary" size="sm" onClick={markAllRead}>Mark all as read</Button>}
      </div>

      {items.length === 0 ? (
        <EmptyState icon={Bell} title="You're all caught up" description="New notifications will appear here." />
      ) : (
        <div className="space-y-2">
          {items.map((n) => {
            const Icon = iconMap[n.type];
            return (
              <Card
                key={n.id}
                onClick={() => markRead(n.id)}
                className={cn("flex cursor-pointer items-start gap-3 p-4 transition-colors hover:bg-surface-hover", !n.read && "border-primary-200 bg-primary-50/40 dark:bg-primary-950/20")}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${colorMap[n.type]}1A` }}>
                  <Icon className="h-[18px] w-[18px]" style={{ color: colorMap[n.type] }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-foreground">{n.title}</p>
                    {!n.read && <span className="h-2 w-2 shrink-0 rounded-full bg-primary-600" />}
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">{n.description}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{n.time}</p>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
