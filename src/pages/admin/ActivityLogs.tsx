import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { activityLogs } from "@/data/mock";

export function AdminActivityLogs() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Activity logs</h1>
        <p className="mt-1 text-sm text-muted-foreground">System-wide audit trail of user and platform actions.</p>
      </div>

      <Card>
        <Table>
          <THead><TR><TH>Actor</TH><TH>Action</TH><TH>Time</TH><TH>Severity</TH></TR></THead>
          <TBody>
            {activityLogs.map((l) => (
              <TR key={l.id}>
                <TD className="font-medium text-foreground">{l.actor}</TD>
                <TD className="text-muted-foreground">{l.action} <span className="text-foreground">{l.target}</span></TD>
                <TD className="text-muted-foreground">{l.time}</TD>
                <TD><Badge variant={l.severity === "critical" ? "danger" : l.severity === "warning" ? "warning" : "neutral"}>{l.severity}</Badge></TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
