import { BrainCircuit, BarChart3, Zap, ShieldCheck, CalendarClock, MessagesSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";

const featureGroups = [
  {
    title: "For students",
    items: [
      { icon: BrainCircuit, title: "AI Tutor", desc: "Ask questions about any course material and get answers grounded in your own lecture notes." },
      { icon: BarChart3, title: "Performance forecasting", desc: "See where your grade is headed before the next exam, not after." },
      { icon: CalendarClock, title: "Personalized learning path", desc: "A living study plan that reorders itself around your weakest topics." },
    ],
  },
  {
    title: "For educators",
    items: [
      { icon: Zap, title: "Instant quiz generation", desc: "Generate graded quizzes from any PDF, slide deck, or topic in seconds." },
      { icon: MessagesSquare, title: "Weak-student alerts", desc: "Ranked list of students who need attention, updated after every assessment." },
      { icon: ShieldCheck, title: "Attendance intelligence", desc: "Spot attendance patterns that correlate with performance drops." },
    ],
  },
];

export function Features() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">One platform, every role covered</h1>
        <p className="mt-4 text-lg text-muted-foreground">From the first-year student to the department head, EduPulse AI adapts its view to what each role needs.</p>
      </div>

      {featureGroups.map((group) => (
        <div key={group.title} className="mt-16">
          <h2 className="text-xl font-semibold text-foreground">{group.title}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {group.items.map((f) => (
              <Card key={f.title} className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950">
                  <f.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
