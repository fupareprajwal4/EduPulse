import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => navigate("/login"), 1200);
    }, 700);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        <h1 className="text-xl font-semibold text-foreground">Password updated</h1>
        <p className="text-sm text-muted-foreground">Redirecting you to log in…</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Set a new password</h1>
      <p className="mt-1.5 text-sm text-muted-foreground">Choose a strong password you haven't used before.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <Input label="New password" type="password" icon={<Lock className="h-4 w-4" />} minLength={8} required />
        <Input label="Confirm password" type="password" icon={<Lock className="h-4 w-4" />} minLength={8} required />
        <Button type="submit" className="w-full" loading={loading}>Update password</Button>
      </form>
    </div>
  );
}
