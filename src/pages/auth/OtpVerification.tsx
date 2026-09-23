import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function OtpVerification() {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const onChange = (i: number, v: string) => {
    if (!/^[0-9]?$/.test(v)) return;
    const next = [...values];
    next[i] = v;
    setValues(next);
    if (v && i < 5) refs.current[i + 1]?.focus();
  };

  const onKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !values[i] && i > 0) refs.current[i - 1]?.focus();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/reset-password");
    }, 700);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Verify your email</h1>
      <p className="mt-1.5 text-sm text-muted-foreground">Enter the 6-digit code we sent to your email address.</p>
      <form onSubmit={onSubmit} className="mt-6">
        <div className="flex justify-between gap-2">
          {values.map((v, i) => (
            <input
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              value={v}
              onChange={(e) => onChange(i, e.target.value)}
              onKeyDown={(e) => onKeyDown(i, e)}
              maxLength={1}
              inputMode="numeric"
              className="h-14 w-12 rounded-lg border border-border bg-surface text-center text-xl font-semibold text-foreground focus-ring"
            />
          ))}
        </div>
        <Button type="submit" className="mt-6 w-full" loading={loading}>Verify code</Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Didn't get a code? <button className="font-medium text-primary-600 hover:underline">Resend</button>
      </p>
    </div>
  );
}
