import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table";
import { BarChart } from "@/components/charts/BarChart";
import { Badge } from "@/components/ui/Badge";
import { departmentAnalytics } from "@/data/mock";

export function AdminDepartments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Department analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">Compare performance and risk across departments.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Average score by department</CardTitle></CardHeader>
          <CardContent><BarChart categories={departmentAnalytics.map((d) => d.name)} data={departmentAnalytics.map((d) => d.avgScore)} color="#6366f1" horizontal /></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>At-risk students by department</CardTitle></CardHeader>
          <CardContent><BarChart categories={departmentAnalytics.map((d) => d.name)} data={departmentAnalytics.map((d) => d.riskCount)} color="#ef4444" horizontal /></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Department summary</CardTitle></CardHeader>
        <Table>
          <THead><TR><TH>Department</TH><TH>Students</TH><TH>Avg. score</TH><TH>At risk</TH></TR></THead>
          <TBody>
            {departmentAnalytics.map((d) => (
              <TR key={d.name}>
                <TD className="font-medium text-foreground">{d.name}</TD>
                <TD>{d.students}</TD>
                <TD>{d.avgScore}%</TD>
                <TD><Badge variant={d.riskCount > 30 ? "danger" : d.riskCount > 15 ? "warning" : "success"}>{d.riskCount} students</Badge></TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
