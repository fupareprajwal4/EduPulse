import { Card } from "@/components/ui/Card";
import { Users, Target, Globe2, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Outcomes over dashboards", desc: "Every chart exists to change what a teacher or student does next." },
  { icon: Lightbulb, title: "AI that explains itself", desc: "No black-box scores — every prediction comes with the reasoning behind it." },
  { icon: Users, title: "Built with educators", desc: "Every workflow was shaped in weekly sessions with practicing teachers." },
  { icon: Globe2, title: "Access for every institution", desc: "From single classrooms to multi-campus universities." },
];

export function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">About EduPulse AI</span>
      <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-foreground">
        We started EduPulse because grades tell you what happened — not what to do about it.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        EduPulse AI began as a research project on academic early-warning systems and grew into a full learning
        analytics platform used by educators who wanted more than a spreadsheet of scores. Our team combines
        backgrounds in machine learning, instructional design, and student support services.
      </p>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {values.map((v) => (
          <Card key={v.title} className="p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950">
              <v.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground">{v.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-3 gap-6 rounded-2xl border border-border bg-surface p-8 text-center">
        <div>
          <p className="text-3xl font-bold text-foreground">120+</p>
          <p className="mt-1 text-sm text-muted-foreground">Institutions</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-foreground">240K</p>
          <p className="mt-1 text-sm text-muted-foreground">Students supported</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-foreground">6.2M</p>
          <p className="mt-1 text-sm text-muted-foreground">AI tutor sessions</p>
        </div>
      </div>
    </div>
  );
}
