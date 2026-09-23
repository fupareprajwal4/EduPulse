import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function Register() {
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
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Create your account</h1>
      <p className="mt-1.5 text-sm text-muted-foreground">Start your 14-day free trial. No credit card required.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <Input label="Full name" icon={<User className="h-4 w-4" />} placeholder="Aditi Sharma" required />
        <Input label="Institutional email" type="email" icon={<Mail className="h-4 w-4" />} placeholder="you@institution.edu" required />
        <Input label="Password" type="password" icon={<Lock className="h-4 w-4" />} placeholder="Minimum 8 characters" minLength={8} required />
        <label className="flex items-start gap-2 text-xs text-muted-foreground">
          <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded border-border" />
          I agree to the <Link to="/terms" className="text-primary-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>
        </label>
        <Button type="submit" className="w-full" loading={loading}>Create account</Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline">Log in</Link>
      </p>
    </div>
  );
}
