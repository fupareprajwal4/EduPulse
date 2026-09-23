import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tooltip({ content, children, className }: { content: string; children: ReactNode; className?: string }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          className={cn(
            "absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background shadow-elevated animate-fade-in",
            className
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}
