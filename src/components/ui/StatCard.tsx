import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  delta,
  trend = "up",
  icon: Icon,
  accent = "#6366f1",
}: {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down";
  icon: LucideIcon;
  accent?: string;
}) {
  return (
    <Card className="p-5 hover:shadow-elevated transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{value}</p>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}1A` }}
        >
          <Icon className="h-5 w-5" style={{ color: accent }} />
        </div>
      </div>
      {delta && (
        <div className={cn("mt-3 flex items-center gap-1 text-xs font-medium", trend === "up" ? "text-emerald-600" : "text-red-500")}>
          {trend === "up" ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
          {delta}
          <span className="text-muted-foreground font-normal">vs last week</span>
        </div>
      )}
    </Card>
  );
}
