import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/verify-otp");
    }, 700);
  };

  return (
    <div>
      <Link to="/login" className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to login
      </Link>
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Reset your password</h1>
      <p className="mt-1.5 text-sm text-muted-foreground">Enter your email and we'll send you a one-time code.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <Input label="Email address" type="email" icon={<Mail className="h-4 w-4" />} placeholder="you@institution.edu" required />
        <Button type="submit" className="w-full" loading={loading}>Send reset code</Button>
      </form>
    </div>
  );
}
