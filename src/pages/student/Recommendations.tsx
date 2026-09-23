import { Sparkles, BookOpen, FileQuestion, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const recs = [
  { icon: PlayCircle, title: "Watch: Process Scheduling Explained (12 min)", reason: "You scored below 70% on this topic in your last quiz", tag: "Video" },
  { icon: FileQuestion, title: "Practice set: B-Tree Operations (10 questions)", reason: "Reinforces Week 8 material before Friday's assessment", tag: "Quiz" },
  { icon: BookOpen, title: "Read: Normalization beyond BCNF", reason: "Fills a gap identified from Assignment 2 feedback", tag: "Reading" },
  { icon: Sparkles, title: "AI-generated flashcards: Big-O Notation", reason: "Spaced repetition due for review today", tag: "Flashcards" },
];

export function Recommendations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Recommendations</h1>
        <p className="mt-1 text-sm text-muted-foreground">Curated by the AI tutor based on your recent performance.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {recs.map((r) => (
          <Card key={r.title} className="p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950">
                <r.icon className="h-5 w-5 text-primary-600" />
              </div>
              <div className="min-w-0">
                <Badge variant="neutral" className="mb-1.5">{r.tag}</Badge>
                <p className="text-sm font-semibold text-foreground">{r.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{r.reason}</p>
              </div>
            </div>
            <Button size="sm" variant="secondary" className="mt-4 w-full">Start now</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
