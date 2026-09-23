import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { EmptyState } from "@/components/ui/EmptyState";
import { courses } from "@/data/mock";

function CourseGrid({ items }: { items: typeof courses }) {
  if (items.length === 0) {
    return <EmptyState icon={BookOpen} title="No courses here" description="Nothing to show in this category yet." />;
  }
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <Link key={c.id} to={`/student/courses/${c.id}`}>
          <Card className="h-full p-5 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center justify-between">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
              <Badge variant={c.status === "completed" ? "success" : c.status === "upcoming" ? "neutral" : "default"}>{c.status}</Badge>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-foreground">{c.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{c.code} · {c.instructor}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>{c.credits} credits</span>
              <span>{c.progress}% complete</span>
            </div>
            <Progress value={c.progress} className="mt-2" color={c.color} />
          </Card>
        </Link>
      ))}
    </div>
  );
}

export function StudentCourses() {
  const [query, setQuery] = useState("");
  const filtered = courses.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Courses</h1>
          <p className="mt-1 text-sm text-muted-foreground">All courses you're enrolled in this semester.</p>
        </div>
        <Input placeholder="Search courses…" icon={<Search className="h-4 w-4" />} value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-xs" />
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <div className="mt-5">
          <TabsContent value="all"><CourseGrid items={filtered} /></TabsContent>
          <TabsContent value="active"><CourseGrid items={filtered.filter((c) => c.status === "active")} /></TabsContent>
          <TabsContent value="completed"><CourseGrid items={filtered.filter((c) => c.status === "completed")} /></TabsContent>
          <TabsContent value="upcoming"><CourseGrid items={filtered.filter((c) => c.status === "upcoming")} /></TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
