import { Link, useParams } from "react-router-dom";
import { Trophy, RotateCcw, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GaugeChart } from "@/components/charts/GaugeChart";
import { Badge } from "@/components/ui/Badge";

const breakdown = [
  { topic: "Big-O Notation", correct: 3, total: 3 },
  { topic: "Data Structures", correct: 2, total: 3 },
  { topic: "Sorting Algorithms", correct: 3, total: 4 },
];

export function QuizResult() {
  const { quizId } = useParams();
  const score = 83;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Card className="p-8 text-center">
        <Trophy className="mx-auto h-10 w-10 text-amber-400" />
        <h1 className="mt-3 text-2xl font-bold text-foreground">Quiz complete!</h1>
        <p className="mt-1 text-sm text-muted-foreground">Here's how you did on quiz {quizId}.</p>
        <div className="mx-auto mt-4 w-56">
          <GaugeChart value={score} label="Score" color="#6366f1" />
        </div>
        <Badge variant="success" className="mt-2">Above class average of 74%</Badge>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-sm font-semibold text-foreground">Topic breakdown</h3>
          <div className="mt-4 space-y-3">
            {breakdown.map((b) => (
              <div key={b.topic} className="flex items-center justify-between text-sm">
                <span className="text-foreground">{b.topic}</span>
                <span className="text-muted-foreground">{b.correct}/{b.total} correct</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="secondary" className="flex-1"><RotateCcw className="h-4 w-4" /> Retake quiz</Button>
        <Link to="/student/ai-workspace" className="flex-1">
          <Button className="w-full">Review weak topics with AI <ArrowRight className="h-4 w-4" /></Button>
        </Link>
      </div>
    </div>
  );
}
