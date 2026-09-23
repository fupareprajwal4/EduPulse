import { useState } from "react";
import { Sparkles, Upload, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

export function QuizGenerator() {
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">AI quiz generator</h1>
        <p className="mt-1 text-sm text-muted-foreground">Turn any lecture, PDF, or topic into a graded quiz in seconds.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-foreground">Source material</h3>
          <div className="mt-3 rounded-xl border border-dashed border-border p-8 text-center">
            <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium text-foreground">Drop a PDF or slide deck</p>
            <p className="text-xs text-muted-foreground">or describe a topic below</p>
          </div>
          <div className="mt-4 space-y-3">
            <Input label="Topic" placeholder="e.g. Process Scheduling Algorithms" defaultValue="Process Scheduling Algorithms" />
            <div className="grid grid-cols-2 gap-3">
              <Input label="Number of questions" type="number" defaultValue={10} />
              <Input label="Difficulty" defaultValue="Medium" />
            </div>
          </div>
          <Button className="mt-5 w-full" onClick={generate} loading={loading}>
            <Sparkles className="h-4 w-4" /> Generate quiz
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-semibold text-foreground">Preview</h3>
          {!generated ? (
            <div className="mt-3 flex h-64 flex-col items-center justify-center gap-2 text-center text-muted-foreground">
              <FileText className="h-8 w-8" />
              <p className="text-sm">Your generated quiz will appear here</p>
            </div>
          ) : (
            <div className="mt-3 space-y-3">
              {["Round Robin gives each process what?", "SJF stands for which scheduling policy?", "Which algorithm can cause starvation without aging?"].map((q, i) => (
                <div key={q} className="rounded-lg border border-border p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">Q{i + 1}. {q}</p>
                    <Badge variant="neutral">MCQ</Badge>
                  </div>
                </div>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="secondary" className="flex-1">Edit questions</Button>
                <Button className="flex-1">Publish to class</Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
