import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const events: Record<number, { title: string; type: "class" | "assignment" | "quiz" }[]> = {
  3: [{ title: "CS301 Lecture", type: "class" }],
  5: [{ title: "CS302 Assignment due", type: "assignment" }],
  8: [{ title: "CS303 Quiz", type: "quiz" }],
  12: [{ title: "CS405 Lecture", type: "class" }, { title: "CS301 Lab", type: "class" }],
  18: [{ title: "CS304 Assignment due", type: "assignment" }],
  22: [{ title: "Mid-semester quiz", type: "quiz" }],
};

const typeColor = { class: "#6366f1", assignment: "#f59e0b", quiz: "#10b981" };

export function StudentCalendar() {
  const [month] = useState("August 2026");
  const daysInMonth = 31;
  const startOffset = 5; // Saturday start for August 2026

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Calendar</h1>
          <p className="mt-1 text-sm text-muted-foreground">Classes, assignments, and quizzes at a glance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted"><ChevronLeft className="h-4 w-4" /></button>
          <span className="text-sm font-semibold text-foreground">{month}</span>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>

      <Card className="p-4">
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-muted-foreground">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {Array.from({ length: startOffset }).map((_, i) => <div key={`empty-${i}`} />)}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <div key={day} className={cn("min-h-[84px] rounded-lg border border-border p-1.5", day === 15 && "border-primary-500 bg-primary-50 dark:bg-primary-950")}>
              <span className="text-xs font-medium text-foreground">{day}</span>
              <div className="mt-1 space-y-1">
                {(events[day] || []).map((e, i) => (
                  <div key={i} className="truncate rounded px-1 py-0.5 text-[10px] font-medium text-white" style={{ backgroundColor: typeColor[e.type] }}>
                    {e.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardContent className="p-5">
          <h3 className="text-sm font-semibold text-foreground">Upcoming this week</h3>
          <div className="mt-3 space-y-2">
            {[{ title: "CS303 Quiz", time: "Fri, 10:00 AM", type: "quiz" }, { title: "CS302 Assignment due", time: "Fri, 11:59 PM", type: "assignment" }].map((e) => (
              <div key={e.title} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{e.title}</span>
                </div>
                <Badge variant={e.type === "quiz" ? "success" : "warning"}>{e.time}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
