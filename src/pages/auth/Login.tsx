import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import type { Role } from "@/types";

export function Login() {
  const [email, setEmail] = useState("aditi.sharma@edupulse.ai");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("student");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login(email, role);
      setLoading(false);
      navigate(`/${role}`);
    }, 700);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Welcome back</h1>
      <p className="mt-1.5 text-sm text-muted-foreground">Log in to continue to your dashboard.</p>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {(["student", "teacher", "admin"] as Role[]).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            className={`rounded-lg border px-3 py-2 text-xs font-medium capitalize transition-colors ${
              role === r ? "border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300" : "border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <Input label="Email address" type="email" icon={<Mail className="h-4 w-4" />} value={email} onChange={(e) => setEmail(e.target.value)} required />
        <div>
          <Input label="Password" type="password" icon={<Lock className="h-4 w-4" />} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          <Link to="/forgot-password" className="mt-1.5 inline-block text-xs font-medium text-primary-600 hover:underline">Forgot password?</Link>
        </div>
        <Button type="submit" className="w-full" loading={loading}>Log in</Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline">Sign up</Link>
      </p>
    </div>
  );
}
