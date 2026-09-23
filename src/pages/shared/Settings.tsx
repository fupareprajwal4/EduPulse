import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn("relative h-6 w-11 rounded-full transition-colors", checked ? "bg-primary-600" : "bg-muted")}
    >
      <span className={cn("absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform", checked ? "translate-x-5" : "translate-x-0")} />
    </button>
  );
}

export function Settings() {
  const { theme, setTheme } = useTheme();
  const [notifs, setNotifs] = useState({ email: true, push: true, digest: false });

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your account preferences.</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <div className="mt-5">
          <TabsContent value="general">
            <Card><CardContent className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Appearance</p>
                  <p className="text-xs text-muted-foreground">Choose light or dark mode</p>
                </div>
                <div className="flex gap-1 rounded-lg bg-muted p-1">
                  <button onClick={() => setTheme("light")} className={cn("rounded-md px-3 py-1.5 text-xs font-medium", theme === "light" ? "bg-surface shadow-subtle" : "text-muted-foreground")}>Light</button>
                  <button onClick={() => setTheme("dark")} className={cn("rounded-md px-3 py-1.5 text-xs font-medium", theme === "dark" ? "bg-surface shadow-subtle" : "text-muted-foreground")}>Dark</button>
                </div>
              </div>
              <Input label="Display name" defaultValue="Aditi Sharma" />
              <Input label="Time zone" defaultValue="Asia/Kolkata (GMT+5:30)" />
              <Button>Save changes</Button>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card><CardContent className="p-6 space-y-5">
              {[
                { key: "email" as const, label: "Email notifications", desc: "Assignment reminders, grades, and AI insights" },
                { key: "push" as const, label: "Push notifications", desc: "Real-time alerts in your browser" },
                { key: "digest" as const, label: "Weekly digest", desc: "A summary of your progress every Monday" },
              ].map((n) => (
                <div key={n.key} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{n.label}</p>
                    <p className="text-xs text-muted-foreground">{n.desc}</p>
                  </div>
                  <Toggle checked={notifs[n.key]} onChange={(v) => setNotifs((s) => ({ ...s, [n.key]: v }))} />
                </div>
              ))}
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="security">
            <Card><CardContent className="p-6 space-y-4">
              <Input label="Current password" type="password" />
              <Input label="New password" type="password" />
              <Input label="Confirm new password" type="password" />
              <Button>Update password</Button>
            </CardContent></Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
