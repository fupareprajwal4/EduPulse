import { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    desc: "For individual classrooms getting started.",
    features: ["Up to 60 students", "AI tutor (limited)", "Core analytics dashboard", "Email support"],
  },
  {
    name: "Institution",
    monthly: 8,
    yearly: 6,
    desc: "For departments and growing programs.",
    features: ["Unlimited students", "Full AI tutor & quiz generation", "Predictive risk scoring", "Attendance intelligence", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    desc: "For multi-campus universities.",
    features: ["Everything in Institution", "SSO & advanced role management", "Dedicated success manager", "Custom data residency", "SLA-backed uptime"],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Simple pricing, per student per month</h1>
        <p className="mt-4 text-lg text-muted-foreground">Start free. Upgrade when your department is ready to scale.</p>
        <div className="mt-6 inline-flex items-center gap-1 rounded-lg bg-muted p-1">
          <button onClick={() => setYearly(true)} className={cn("rounded-md px-4 py-1.5 text-sm font-medium", yearly ? "bg-surface shadow-subtle text-foreground" : "text-muted-foreground")}>Yearly <span className="text-emerald-600">-25%</span></button>
          <button onClick={() => setYearly(false)} className={cn("rounded-md px-4 py-1.5 text-sm font-medium", !yearly ? "bg-surface shadow-subtle text-foreground" : "text-muted-foreground")}>Monthly</button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <Card key={p.name} className={cn("relative p-8", p.highlighted && "border-primary-500 shadow-glow")}>
            {p.highlighted && (
              <span className="absolute -top-3 left-8 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
            )}
            <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-6">
              {p.monthly === null ? (
                <span className="text-3xl font-bold text-foreground">Custom</span>
              ) : (
                <>
                  <span className="text-3xl font-bold text-foreground">${yearly ? p.yearly : p.monthly}</span>
                  <span className="text-sm text-muted-foreground"> / student / mo</span>
                </>
              )}
            </div>
            <Link to="/register">
              <Button className="mt-6 w-full" variant={p.highlighted ? "primary" : "secondary"}>
                {p.monthly === null ? "Contact sales" : "Get started"}
              </Button>
            </Link>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {f}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
