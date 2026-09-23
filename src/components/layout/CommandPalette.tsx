import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, BarChart3, Sparkles, Settings, FileQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Go to Student Dashboard", href: "/student", icon: BarChart3 },
  { label: "Open AI Workspace", href: "/student/ai-workspace", icon: Sparkles },
  { label: "View Courses", href: "/student/courses", icon: BookOpen },
  { label: "View Quizzes", href: "/student/quizzes", icon: FileQuestion },
  { label: "Open Settings", href: "/settings", icon: Settings },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = useMemo(
    () => items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated animate-slide-up">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">ESC</kbd>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                onClose();
                setQuery("");
              }}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-foreground hover:bg-muted focus-ring"
              )}
            >
              <item.icon className="h-4 w-4 text-muted-foreground" />
              {item.label}
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">No results found</p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
