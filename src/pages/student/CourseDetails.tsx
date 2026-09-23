import { useParams, Link } from "react-router-dom";
import { PlayCircle, FileText, Download, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { courses, assignments } from "@/data/mock";

const modules = [
  { title: "Introduction & Foundations", lessons: 6, done: 6 },
  { title: "Core Concepts & Techniques", lessons: 8, done: 5 },
  { title: "Advanced Applications", lessons: 5, done: 1 },
  { title: "Capstone Project", lessons: 3, done: 0 },
];

export function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId) ?? courses[0];
  const courseAssignments = assignments.filter((a) => a.courseCode === course.code);

  return (
    <div className="space-y-6">
      <Breadcrumb items={[{ label: "Courses", href: "/student/courses" }, { label: course.title }]} />

      <Card className="overflow-hidden">
        <div className="h-2 w-full" style={{ backgroundColor: course.color }} />
        <CardContent className="flex flex-wrap items-start justify-between gap-4 p-6">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-foreground">{course.title}</h1>
              <Badge variant={course.status === "completed" ? "success" : "default"}>{course.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{course.code} · Instructed by {course.instructor} · {course.credits} credits</p>
            <div className="mt-4 max-w-xs">
              <div className="flex justify-between text-xs text-muted-foreground"><span>Course progress</span><span>{course.progress}%</span></div>
              <Progress value={course.progress} className="mt-1.5" color={course.color} />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary"><MessageSquare className="h-4 w-4" /> Ask AI about this course</Button>
            <Button><PlayCircle className="h-4 w-4" /> Resume learning</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="modules">
        <TabsList>
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
        </TabsList>

        <div className="mt-5">
          <TabsContent value="modules">
            <div className="space-y-3">
              {modules.map((m) => (
                <Card key={m.title} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{m.title}</p>
                      <p className="text-xs text-muted-foreground">{m.done}/{m.lessons} lessons complete</p>
                    </div>
                    <Progress value={(m.done / m.lessons) * 100} className="w-32" color={course.color} />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments">
            <div className="space-y-3">
              {courseAssignments.length === 0 && <p className="text-sm text-muted-foreground">No assignments for this course yet.</p>}
              {courseAssignments.map((a) => (
                <Link key={a.id} to={`/student/assignments/${a.id}`}>
                  <Card className="flex items-center justify-between p-4 hover:shadow-elevated transition-shadow">
                    <div>
                      <p className="text-sm font-medium text-foreground">{a.title}</p>
                      <p className="text-xs text-muted-foreground">Due {a.dueDate}</p>
                    </div>
                    <Badge variant={a.status === "graded" ? "success" : a.status === "late" ? "danger" : "default"}>{a.status}</Badge>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="materials">
            <div className="grid gap-3 sm:grid-cols-2">
              {["Week 1 — Slides.pdf", "Week 2 — Reading.pdf", "Lab Manual.pdf", "Reference Sheet.pdf"].map((f) => (
                <Card key={f} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary-600" />
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                  <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
