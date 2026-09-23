import { Users, BookOpen, AlertTriangle, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { LineAreaChart } from "@/components/charts/LineAreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { rankings, courses } from "@/data/mock";
import { Link } from "react-router-dom";

export function TeacherDashboard() {
  const atRisk = rankings.filter((r) => r.riskLevel !== "low");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Welcome back, Dr. Verma</h1>
        <p className="mt-1 text-sm text-muted-foreground">Here's how your courses are performing this week.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total students" value="516" delta="+8" icon={Users} accent="#6366f1" />
        <StatCard label="Active courses" value="4" icon={BookOpen} accent="#3b82f6" />
        <StatCard label="Students at risk" value={String(atRisk.length)} delta="Needs attention" trend="down" icon={AlertTriangle} accent="#ef4444" />
        <StatCard label="Avg. class score" value="81%" delta="+3%" icon={TrendingUp} accent="#10b981" />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div>
              <CardTitle>Class performance trend</CardTitle>
              <CardDescription>Average score across CS301 this semester</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <LineAreaChart categories={["W1", "W2", "W3", "W4", "W5", "W6", "W7"]} data={[68, 70, 74, 72, 77, 79, 81]} color="#3b82f6" height={260} />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-primary-600 to-primary-800 text-white border-0">
          <CardContent className="p-6">
            <Sparkles className="h-8 w-8 text-amber-300" />
            <h3 className="mt-3 font-semibold">AI insight</h3>
            <p className="mt-2 text-sm text-primary-100">
              3 students in CS303 have missed 2+ classes and scored below 65% on the last assignment — early intervention recommended.
            </p>
            <Link to="/teacher/analytics" className="mt-4 inline-block text-sm font-medium underline">View weak students</Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Student ranking — CS301</CardTitle>
            <Link to="/teacher/analytics" className="text-xs font-medium text-primary-600 hover:underline">View all</Link>
          </CardHeader>
          <CardContent className="space-y-2">
            {rankings.map((r, i) => (
              <div key={r.id} className="flex items-center gap-3 rounded-lg border border-border p-3">
                <span className="w-5 text-center text-sm font-semibold text-muted-foreground">{i + 1}</span>
                <Avatar name={r.name} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{r.name}</p>
                </div>
                <span className="text-sm font-semibold text-foreground">{r.score}%</span>
                <Badge variant={r.riskLevel === "low" ? "success" : r.riskLevel === "medium" ? "warning" : "danger"}>{r.riskLevel} risk</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Courses at a glance</CardTitle></CardHeader>
          <CardContent>
            <BarChart categories={courses.filter(c=>c.status==="active").map((c) => c.code)} data={courses.filter(c=>c.status==="active").map((c) => c.studentsEnrolled || 0)} color="#6366f1" height={220} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
