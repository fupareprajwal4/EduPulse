import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { LineAreaChart } from "@/components/charts/LineAreaChart";
import { GaugeChart } from "@/components/charts/GaugeChart";
import { Cpu, Zap, MessageSquare, AlertOctagon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function AIMonitoring() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">AI monitoring</h1>
        <p className="mt-1 text-sm text-muted-foreground">Health and usage of AI Tutor, quiz generation, and analytics models.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="AI sessions today" value="4,218" delta="+9%" icon={MessageSquare} accent="#6366f1" />
        <StatCard label="Avg. response time" value="1.4s" delta="-0.2s" icon={Zap} accent="#10b981" />
        <StatCard label="Model uptime" value="99.94%" icon={Cpu} accent="#3b82f6" />
        <StatCard label="Flagged responses" value="7" delta="Needs review" trend="down" icon={AlertOctagon} accent="#ef4444" />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>AI request volume (24h)</CardTitle></CardHeader>
          <CardContent>
            <LineAreaChart categories={["00:00","04:00","08:00","12:00","16:00","20:00","23:59"]} data={[120, 80, 340, 610, 720, 480, 210]} color="#6366f1" height={260} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Model accuracy</CardTitle></CardHeader>
          <CardContent><GaugeChart value={96} label="Prediction accuracy" color="#6366f1" /></CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-5">
          <h3 className="text-sm font-semibold text-foreground">Recent flags</h3>
          <div className="mt-3 space-y-2">
            {[
              { text: "Response latency exceeded 4s threshold for AI Tutor service", sev: "warning" },
              { text: "Quiz generator produced a malformed answer key", sev: "danger" },
              { text: "Model retrain completed successfully", sev: "info" },
            ].map((f, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3 text-sm">
                <span className="text-foreground">{f.text}</span>
                <Badge variant={f.sev === "danger" ? "danger" : f.sev === "warning" ? "warning" : "neutral"}>{f.sev}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
