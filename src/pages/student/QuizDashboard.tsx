import { Link } from "react-router-dom";
import { FileQuestion, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const quizzes = [
  { id: "q1", title: "Big-O Notation & Complexity", course: "CS301", questions: 10, duration: "15 min", status: "available" },
  { id: "q2", title: "Normal Forms (1NF–BCNF)", course: "CS302", questions: 8, duration: "12 min", status: "available" },
  { id: "q3", title: "Process Scheduling Algorithms", course: "CS303", questions: 12, duration: "18 min", status: "completed", score: 83 },
  { id: "q4", title: "Regression & Loss Functions", course: "CS405", questions: 10, duration: "15 min", status: "completed", score: 95 },
];

export function QuizDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Quizzes</h1>
        <p className="mt-1 text-sm text-muted-foreground">AI-generated practice quizzes based on your course material.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((q) => (
          <Card key={q.id} className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950">
                <FileQuestion className="h-5 w-5 text-primary-600" />
              </div>
              {q.status === "completed" ? (
                <Badge variant="success"><CheckCircle2 className="h-3 w-3" /> {q.score}%</Badge>
              ) : (
                <Badge variant="default">Available</Badge>
              )}
            </div>
            <h3 className="mt-3 text-sm font-semibold text-foreground">{q.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{q.course} · {q.questions} questions</p>
            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> {q.duration}
            </div>
            <Link to={q.status === "completed" ? `/student/quizzes/${q.id}/result` : `/student/quizzes/${q.id}/play`}>
              <Button size="sm" variant={q.status === "completed" ? "secondary" : "primary"} className="mt-4 w-full">
                {q.status === "completed" ? "View result" : "Start quiz"}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
