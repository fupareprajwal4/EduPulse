import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function PublicNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-surface/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">EduPulse AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                cn("text-sm font-medium transition-colors", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link to="/register">
            <Button size="sm">Start free</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="space-y-1 border-t border-border px-6 py-4 md:hidden animate-slide-up">
          {links.map((l) => (
            <NavLink key={l.href} to={l.href} className="block py-2 text-sm font-medium text-foreground" onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <div className="mt-3 flex gap-2">
            <Link to="/login" className="flex-1"><Button variant="secondary" className="w-full">Log in</Button></Link>
            <Link to="/register" className="flex-1"><Button className="w-full">Start free</Button></Link>
          </div>
        </div>
      )}
    </header>
  );
}
