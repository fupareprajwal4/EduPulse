import { cn } from "@/lib/utils";

export function Progress({
  value,
  className,
  barClassName,
  color = "#6366f1",
}: {
  value: number;
  className?: string;
  barClassName?: string;
  color?: string;
}) {
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-muted", className)}>
      <div
        className={cn("h-full rounded-full transition-all duration-500", barClassName)}
        style={{ width: `${Math.min(100, Math.max(0, value))}%`, backgroundColor: color }}
      />
    </div>
  );
}
