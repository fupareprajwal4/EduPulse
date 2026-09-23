import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import type { Role } from "@/types";

export function DashboardLayout({ role }: { role: Role }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar role={role} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-[1600px] animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
