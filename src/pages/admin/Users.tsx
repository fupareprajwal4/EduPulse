import { useState } from "react";
import { Search, UserPlus } from "lucide-react";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Dropdown, DropdownItem } from "@/components/ui/Dropdown";
import { MoreVertical } from "lucide-react";

const users = [
  { name: "Aditi Sharma", email: "aditi.sharma@edupulse.ai", role: "Student", status: "active", dept: "Computer Science" },
  { name: "Dr. A. Verma", email: "a.verma@edupulse.ai", role: "Teacher", status: "active", dept: "Computer Science" },
  { name: "R. Kulkarni", email: "r.kulkarni@edupulse.ai", role: "Admin", status: "active", dept: "Administration" },
  { name: "Karan Deshmukh", email: "karan.d@edupulse.ai", role: "Student", status: "suspended", dept: "Electronics" },
  { name: "Prof. K. Iyer", email: "k.iyer@edupulse.ai", role: "Teacher", status: "active", dept: "Computer Science" },
];

export function AdminUsers() {
  const [query, setQuery] = useState("");
  const filtered = users.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">User management</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage roles, access, and account status.</p>
        </div>
        <Button><UserPlus className="h-4 w-4" /> Invite user</Button>
      </div>

      <Input placeholder="Search users…" icon={<Search className="h-4 w-4" />} value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-xs" />

      <Card>
        <Table>
          <THead>
            <TR><TH>User</TH><TH>Role</TH><TH>Department</TH><TH>Status</TH><TH /></TR>
          </THead>
          <TBody>
            {filtered.map((u) => (
              <TR key={u.email}>
                <TD>
                  <div className="flex items-center gap-2.5">
                    <Avatar name={u.name} size="sm" />
                    <div>
                      <p className="font-medium text-foreground">{u.name}</p>
                      <p className="text-xs text-muted-foreground">{u.email}</p>
                    </div>
                  </div>
                </TD>
                <TD>{u.role}</TD>
                <TD className="text-muted-foreground">{u.dept}</TD>
                <TD><Badge variant={u.status === "active" ? "success" : "danger"}>{u.status}</Badge></TD>
                <TD>
                  <Dropdown trigger={<button className="rounded-md p-1.5 hover:bg-muted"><MoreVertical className="h-4 w-4" /></button>}>
                    <DropdownItem>Edit role</DropdownItem>
                    <DropdownItem>Reset password</DropdownItem>
                    <DropdownItem className="text-danger-600">Suspend</DropdownItem>
                  </Dropdown>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
