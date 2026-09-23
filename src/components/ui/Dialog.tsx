import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-elevated animate-slide-up",
          className
        )}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:bg-muted focus-ring"
        >
          <X className="h-4 w-4" />
        </button>
        {title && <h2 className="text-lg font-semibold text-foreground pr-8">{title}</h2>}
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        <div className="mt-4">{children}</div>
      </div>
    </div>,
    document.body
  );
}
