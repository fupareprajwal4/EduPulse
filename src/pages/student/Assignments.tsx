import { useState } from "react";
import { Link } from "react-router-dom";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Pagination } from "@/components/ui/Pagination";
import { assignments } from "@/data/mock";

const badgeVariant = { pending: "warning", submitted: "default", graded: "success", late: "danger" } as const;

export function StudentAssignments() {
  const [page, setPage] = useState(1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Assignments</h1>
        <p className="mt-1 text-sm text-muted-foreground">Track submissions and grades across all your courses.</p>
      </div>

      <Card>
        <Table>
          <THead>
            <TR>
              <TH>Assignment</TH>
              <TH>Course</TH>
              <TH>Due date</TH>
              <TH>Status</TH>
              <TH>Grade</TH>
            </TR>
          </THead>
          <TBody>
            {assignments.map((a) => (
              <TR key={a.id}>
                <TD>
                  <Link to={`/student/assignments/${a.id}`} className="font-medium text-foreground hover:text-primary-600">
                    {a.title}
                  </Link>
                </TD>
                <TD className="text-muted-foreground">{a.courseCode}</TD>
                <TD className="text-muted-foreground">{a.dueDate}</TD>
                <TD><Badge variant={badgeVariant[a.status]}>{a.status}</Badge></TD>
                <TD>{a.grade ? `${a.grade}/${a.maxGrade}` : "—"}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
        <div className="border-t border-border p-4">
          <Pagination page={page} totalPages={1} onChange={setPage} />
        </div>
      </Card>
    </div>
  );
}
