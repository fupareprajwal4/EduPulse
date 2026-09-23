import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { HeatmapChart } from "@/components/charts/HeatmapChart";
import { GaugeChart } from "@/components/charts/GaugeChart";
import { attendanceHeatmap } from "@/data/mock";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { rankings } from "@/data/mock";

export function TeacherAttendance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Attendance</h1>
        <p className="mt-1 text-sm text-muted-foreground">Weekly attendance patterns across CS301.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Attendance heatmap (18 weeks)</CardTitle></CardHeader>
          <CardContent><HeatmapChart data={attendanceHeatmap} /></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Overall attendance rate</CardTitle></CardHeader>
          <CardContent><GaugeChart value={84} label="Semester average" color="#10b981" /></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Students with attendance concerns</CardTitle></CardHeader>
        <Table>
          <THead><TR><TH>Student</TH><TH>Attendance</TH><TH>Flag</TH></TR></THead>
          <TBody>
            {rankings.filter((r) => r.riskLevel !== "low").map((r) => (
              <TR key={r.id}>
                <TD className="font-medium text-foreground">{r.name}</TD>
                <TD>{r.riskLevel === "high" ? "58%" : "71%"}</TD>
                <TD><Badge variant={r.riskLevel === "high" ? "danger" : "warning"}>Below threshold</Badge></TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
