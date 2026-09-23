import { useParams } from "react-router-dom";
import { Upload, FileText, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { assignments } from "@/data/mock";

export function AssignmentDetails() {
  const { assignmentId } = useParams();
  const a = assignments.find((x) => x.id === assignmentId) ?? assignments[0];

  return (
    <div className="space-y-6">
      <Breadcrumb items={[{ label: "Assignments", href: "/student/assignments" }, { label: a.title }]} />

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-foreground">{a.title}</h1>
              <Badge variant={a.status === "graded" ? "success" : a.status === "late" ? "danger" : "default"}>{a.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{a.courseCode} · Due {a.dueDate} · Max grade {a.maxGrade}</p>

            <div className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>Implement the assigned data structure and provide a short written analysis of time and space complexity for each operation.</p>
              <p>Submit your source code as a single archive along with a PDF report. Late submissions are penalized 10% per day.</p>
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-border p-8 text-center">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm font-medium text-foreground">Drag files here or click to upload</p>
              <p className="text-xs text-muted-foreground">PDF, ZIP up to 25MB</p>
              <Button size="sm" variant="secondary" className="mt-4">Choose files</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><Clock className="h-4 w-4 text-primary-600" /> Timeline</div>
              <ul className="mt-3 space-y-3 text-xs text-muted-foreground">
                <li>Assigned — 2 weeks ago</li>
                <li>Due — {a.dueDate}</li>
                {a.grade && <li>Graded — {a.grade}/{a.maxGrade}</li>}
              </ul>
            </CardContent>
          </Card>
          {a.grade && (
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><FileText className="h-4 w-4 text-primary-600" /> Instructor feedback</div>
                <p className="mt-2 text-sm text-muted-foreground">Solid implementation. Your complexity analysis for the delete operation needs more detail on the rebalancing case.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
