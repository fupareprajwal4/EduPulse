import { Users, Building2, Activity, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { BarChart } from "@/components/charts/BarChart";
import { DonutChart } from "@/components/charts/DonutChart";
import { LineAreaChart } from "@/components/charts/LineAreaChart";
import { departmentAnalytics } from "@/data/mock";

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Platform overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">Institution-wide analytics and system health.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total users" value="2,002" delta="+64 this month" icon={Users} accent="#6366f1" />
        <StatCard label="Departments" value="5" icon={Building2} accent="#3b82f6" />
        <StatCard label="Platform uptime" value="99.98%" icon={Activity} accent="#10b981" />
        <StatCard label="Active alerts" value="3" delta="Needs review" trend="down" icon={ShieldAlert} accent="#ef4444" />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Platform usage (daily active users)</CardTitle></CardHeader>
          <CardContent><LineAreaChart categories={["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]} data={[1420,1510,1600,1580,1720,980,860]} color="#6366f1" height={260} /></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>User distribution</CardTitle></CardHeader>
          <CardContent>
            <DonutChart data={[
              { name: "Students", value: 1720, color: "#6366f1" },
              { name: "Teachers", value: 240, color: "#10b981" },
              { name: "Admins", value: 42, color: "#f59e0b" },
            ]} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Department performance</CardTitle></CardHeader>
        <CardContent>
          <BarChart categories={departmentAnalytics.map((d) => d.name)} data={departmentAnalytics.map((d) => d.avgScore)} color="#3b82f6" height={280} />
        </CardContent>
      </Card>
    </div>
  );
}
