import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { LineAreaChart } from "@/components/charts/LineAreaChart";
import { RadarSkillChart } from "@/components/charts/RadarSkillChart";
import { BarChart } from "@/components/charts/BarChart";
import { GaugeChart } from "@/components/charts/GaugeChart";
import { TrendingUp, Target, AlertTriangle, Award } from "lucide-react";
import { weeklyProgress, skillRadar, courses } from "@/data/mock";

export function Performance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Performance dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">A full picture of how you're tracking this semester.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Overall GPA" value="8.6 / 10" delta="+0.3" icon={Award} accent="#6366f1" />
        <StatCard label="Predicted final grade" value="A-" delta="On track" icon={Target} accent="#10b981" />
        <StatCard label="Weakest topic" value="OS Scheduling" icon={AlertTriangle} accent="#ef4444" />
        <StatCard label="Improvement rate" value="+12%" delta="4 weeks" icon={TrendingUp} accent="#3b82f6" />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div>
              <CardTitle>Performance forecast</CardTitle>
              <CardDescription>Predicted trajectory based on current trends</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <LineAreaChart categories={["W1", "W2", "W3", "W4", "W5", "W6", "W7"]} data={weeklyProgress} height={280} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Attendance rate</CardTitle></CardHeader>
          <CardContent><GaugeChart value={87} label="This semester" color="#10b981" /></CardContent>
        </Card>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card>
          <CardHeader><CardTitle>Skill radar</CardTitle></CardHeader>
          <CardContent><RadarSkillChart data={skillRadar} /></CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Course comparison</CardTitle></CardHeader>
          <CardContent>
            <BarChart categories={courses.filter(c=>c.status==="active").map((c) => c.code)} data={courses.filter(c=>c.status==="active").map((c) => c.progress)} color="#6366f1" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
