import { Card } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Users, ClipboardList } from "lucide-react";
import { courses } from "@/data/mock";

export function TeacherCourses() {
  const myCourses = courses.filter((c) => c.status !== "upcoming");
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Course management</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage rosters, materials, and grading for your courses.</p>
        </div>
        <Button>+ New course</Button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {myCourses.map((c) => (
          <Card key={c.id} className="p-5">
            <span className="h-2 w-2 rounded-full inline-block" style={{ backgroundColor: c.color }} />
            <h3 className="mt-3 text-sm font-semibold text-foreground">{c.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{c.code} · {c.credits} credits</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {c.studentsEnrolled} students</span>
              <span className="flex items-center gap-1"><ClipboardList className="h-3.5 w-3.5" /> 3 assignments</span>
            </div>
            <Progress value={c.progress} className="mt-3" color={c.color} />
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="secondary" className="flex-1">Manage</Button>
              <Button size="sm" className="flex-1">Grade</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
