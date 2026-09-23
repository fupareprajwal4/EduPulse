import { Outlet, Link } from "react-router-dom";
import { GraduationCap, Sparkles, BarChart3, ShieldCheck } from "lucide-react";

const points = [
  { icon: Sparkles, text: "AI tutor that adapts to how each student learns" },
  { icon: BarChart3, text: "Predictive analytics that flag risk before it's too late" },
  { icon: ShieldCheck, text: "Enterprise-grade security and role-based access" },
];

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20">
        <Link to="/" className="mb-10 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">EduPulse AI</span>
        </Link>
        <div className="mx-auto w-full max-w-sm">
          <Outlet />
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 lg:flex lg:flex-col lg:justify-center lg:px-16">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="relative z-10">
          <h2 className="max-w-md text-3xl font-bold leading-tight text-white">
            Learning analytics that actually help students succeed.
          </h2>
          <div className="mt-10 space-y-5">
            {points.map((p) => (
              <div key={p.text} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <p.icon className="h-[18px] w-[18px] text-white" />
                </div>
                <p className="mt-1.5 text-sm text-primary-100">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
