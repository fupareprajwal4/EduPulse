import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Clock, ChevronRight, ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import { cn } from "@/lib/utils";

const questions = [
  { id: "1", question: "What is the time complexity of binary search on a sorted array of n elements?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correctIndex: 1 },
  { id: "2", question: "Which data structure gives the best average-case time complexity for search, insert, and delete?", options: ["Linked List", "Array", "Hash Table", "Stack"], correctIndex: 2 },
  { id: "3", question: "What is the worst-case time complexity of quicksort?", options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"], correctIndex: 2 },
  { id: "4", question: "Which notation describes an upper bound on running time?", options: ["Big-Omega", "Big-Theta", "Big-O", "Little-o"], correctIndex: 2 },
];

export function QuizPlayer() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const selectAnswer = (idx: number) => setAnswers((a) => ({ ...a, [q.id]: idx }));

  const next = () => {
    if (current < questions.length - 1) setCurrent((c) => c + 1);
    else navigate(`/student/quizzes/${quizId}/result`);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Question {current + 1} of {questions.length}</span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 12:44 remaining</span>
        </div>
        <Progress value={progress} className="mt-2" />
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground">{q.question}</h2>
        <div className="mt-5 space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={opt}
              onClick={() => selectAnswer(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors focus-ring",
                answers[q.id] === i ? "border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300" : "border-border text-foreground hover:bg-muted"
              )}
            >
              <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs", answers[q.id] === i ? "border-primary-500 bg-primary-500 text-white" : "border-border")}>
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          ))}
        </div>
      </Card>

      <div className="flex justify-between">
        <Button variant="secondary" disabled={current === 0} onClick={() => setCurrent((c) => c - 1)}>
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        <Button onClick={next} disabled={answers[q.id] === undefined}>
          {current === questions.length - 1 ? "Submit quiz" : "Next"} <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
