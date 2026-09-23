import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const columns = [
  { title: "Product", links: [{ label: "Features", href: "/features" }, { label: "Pricing", href: "/pricing" }, { label: "AI Workspace", href: "/features" }] },
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Help Center", href: "/help" }] },
  { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-5">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">EduPulse AI</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Empowering students and educators through AI-driven personalized learning and predictive academic success.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 EduPulse AI. All rights reserved.
      </div>
    </footer>
  );
}
