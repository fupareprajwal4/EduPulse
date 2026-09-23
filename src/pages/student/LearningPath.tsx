import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { learningPath } from "@/data/mock";
import { cn } from "@/lib/utils";

export function LearningPath() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Learning path</h1>
        <p className="mt-1 text-sm text-muted-foreground">A personalized sequence, reordered automatically around your weak topics.</p>
      </div>

      <div className="relative space-y-6 pl-8">
        <div className="absolute bottom-0 left-3 top-0 w-px bg-border" />
        {learningPath.map((step) => (
          <div key={step.id} className="relative">
            <div
              className={cn(
                "absolute -left-8 top-0.5 flex h-6 w-6 items-center justify-center rounded-full",
                step.status === "completed" ? "bg-emerald-500" : step.status === "in-progress" ? "bg-primary-600" : "bg-muted"
              )}
            >
              {step.status === "completed" ? (
                <CheckCircle2 className="h-4 w-4 text-white" />
              ) : step.status === "in-progress" ? (
                <Loader2 className="h-3.5 w-3.5 text-white" />
              ) : (
                <Circle className="h-3 w-3 text-muted-foreground" />
              )}
            </div>
            <Card className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{step.title}</p>
                  <Badge variant={step.status === "completed" ? "success" : step.status === "in-progress" ? "default" : "neutral"} className="mt-1.5">
                    {step.status.replace("-", " ")}
                  </Badge>
                </div>
                <span className="text-sm font-semibold text-foreground">{step.progress}%</span>
              </div>
              <Progress value={step.progress} className="mt-3" />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
