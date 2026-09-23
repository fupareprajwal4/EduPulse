import { useState } from "react";
import { Search, BookOpen, MessageCircle, Mail, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "How does the AI Tutor know what's in my course material?", a: "The AI Tutor is grounded in the documents and lecture notes your instructor uploads for each course, so its answers reference your actual syllabus rather than generic content." },
  { q: "How accurate is the performance forecast?", a: "Forecasts are based on your historical assignment, quiz, and attendance data and improve in accuracy as more data accumulates through the semester." },
  { q: "Can my instructor see my AI Tutor conversations?", a: "Instructors see aggregated, anonymized insights like commonly misunderstood topics — not your individual chat transcripts." },
  { q: "How do I switch between light and dark mode?", a: "Use the sun/moon icon in the top navigation bar, or set your preference under Settings → General." },
];

export function HelpCenter() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-8 py-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">How can we help?</h1>
        <Input
          placeholder="Search help articles…"
          icon={<Search className="h-4 w-4" />}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mx-auto mt-4 max-w-md"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[{ icon: BookOpen, title: "Getting started", desc: "Setup and onboarding guides" }, { icon: MessageCircle, title: "Live chat", desc: "Talk to our support team" }, { icon: Mail, title: "Email support", desc: "support@edupulse.ai" }].map((c) => (
          <Card key={c.title} className="p-5 text-center hover:shadow-elevated transition-shadow cursor-pointer">
            <c.icon className="mx-auto h-6 w-6 text-primary-600" />
            <p className="mt-2 text-sm font-semibold text-foreground">{c.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-sm font-semibold text-foreground">Frequently asked questions</h2>
        <div className="mt-3 space-y-2">
          {faqs.filter((f) => f.q.toLowerCase().includes(query.toLowerCase())).map((f, i) => (
            <Card key={f.q} className="overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                <span className="text-sm font-medium text-foreground">{f.q}</span>
                <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", open === i && "rotate-180")} />
              </button>
              {open === i && <CardContent className="pt-0 text-sm text-muted-foreground">{f.a}</CardContent>}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
