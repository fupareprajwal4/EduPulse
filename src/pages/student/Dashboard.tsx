import { Flame, BookOpen, ClipboardCheck, Clock3, Sparkles, ArrowRight, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LineAreaChart } from "@/components/charts/LineAreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { RadarSkillChart } from "@/components/charts/RadarSkillChart";
import { courses, assignments, weeklyProgress, weeklyStudyHours, skillRadar } from "@/data/mock";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

export function StudentDashboard() {
  const { user } = useAuth();
  const activeCourses = courses.filter((c) => c.status === "active");
  const pending = assignments.filter((a) => a.status === "pending");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Good morning, {user?.name?.split(" ")[0] || "there"} 👋</h1>
          <p className="mt-1 text-sm text-muted-foreground">Here's what's happening across your courses today.</p>
        </div>
        <Link to="/student/ai-workspace">
          <Button><Sparkles className="h-4 w-4" /> Ask AI Tutor</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Learning streak" value="14 days" delta="+2 days" icon={Flame} accent="#f59e0b" />
        <StatCard label="Active courses" value={String(activeCourses.length)} delta="On track" trend="up" icon={BookOpen} accent="#6366f1" />
        <StatCard label="Pending assignments" value={String(pending.length)} delta="Due this week" trend="down" icon={ClipboardCheck} accent="#ef4444" />
        <StatCard label="Study time (week)" value="23.1 hrs" delta="+3.4 hrs" icon={Clock3} accent="#10b981" />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div>
              <CardTitle>Weekly progress</CardTitle>
              <CardDescription>Composite score across all active courses</CardDescription>
            </div>
            <Badge variant="success">+12% vs last week</Badge>
          </CardHeader>
          <CardContent>
            <LineAreaChart categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} data={weeklyProgress} height={260} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill radar</CardTitle>
          </CardHeader>
          <CardContent>
            <RadarSkillChart data={skillRadar} height={260} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Today's learning — active courses</CardTitle>
            <Link to="/student/courses" className="text-xs font-medium text-primary-600 hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeCourses.map((c) => (
              <div key={c.id} className="flex items-center gap-4 rounded-lg border border-border p-3">
                <div className="h-10 w-1.5 rounded-full" style={{ backgroundColor: c.color }} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.code} · {c.instructor} {c.nextSession && `· Next: ${c.nextSession}`}</p>
                  <Progress value={c.progress} className="mt-2" color={c.color} />
                </div>
                <span className="text-sm font-semibold text-foreground">{c.progress}%</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study time (hrs)</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} data={weeklyStudyHours} color="#10b981" height={220} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming assignments</CardTitle>
            <Link to="/student/assignments" className="text-xs font-medium text-primary-600 hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {assignments.slice(0, 4).map((a) => (
              <div key={a.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.courseCode} · Due {a.dueDate}</p>
                </div>
                <Badge variant={a.status === "graded" ? "success" : a.status === "late" ? "danger" : a.status === "submitted" ? "default" : "warning"}>
                  {a.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary-600 to-primary-800 text-white border-0">
          <CardContent className="p-6">
            <Trophy className="h-8 w-8 text-amber-300" />
            <h3 className="mt-3 font-semibold">AI Insight of the day</h3>
            <p className="mt-2 text-sm text-primary-100">
              You've improved 12% in Machine Learning this week, but Operating Systems needs attention — process scheduling is your weakest topic.
            </p>
            <Link to="/student/ai-workspace">
              <Button variant="secondary" size="sm" className="mt-4">Get a study plan</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
