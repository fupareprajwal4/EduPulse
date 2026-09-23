import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { RadarSkillChart } from "@/components/charts/RadarSkillChart";
import { rankings, skillRadar } from "@/data/mock";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const trendIcon = { up: TrendingUp, down: TrendingDown, flat: Minus };

export function TeacherAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Student analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">Ranked performance and risk signals across your classes.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Ranked student list</CardTitle></CardHeader>
          <Table>
            <THead>
              <TR><TH>Student</TH><TH>Score</TH><TH>Trend</TH><TH>Risk</TH></TR>
            </THead>
            <TBody>
              {rankings.map((r) => {
                const Icon = trendIcon[r.trend];
                return (
                  <TR key={r.id}>
                    <TD>
                      <div className="flex items-center gap-2.5">
                        <Avatar name={r.name} size="sm" />
                        <span className="font-medium text-foreground">{r.name}</span>
                      </div>
                    </TD>
                    <TD>{r.score}%</TD>
                    <TD><Icon className={`h-4 w-4 ${r.trend === "up" ? "text-emerald-500" : r.trend === "down" ? "text-red-500" : "text-muted-foreground"}`} /></TD>
                    <TD><Badge variant={r.riskLevel === "low" ? "success" : r.riskLevel === "medium" ? "warning" : "danger"}>{r.riskLevel}</Badge></TD>
                  </TR>
                );
              })}
            </TBody>
          </Table>
        </Card>
        <Card>
          <CardHeader><CardTitle>Class-wide skill coverage</CardTitle></CardHeader>
          <CardContent><RadarSkillChart data={skillRadar} /></CardContent>
        </Card>
      </div>
    </div>
  );
}
