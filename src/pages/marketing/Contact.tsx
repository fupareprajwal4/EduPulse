import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Let's talk about your institution</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you run a single classroom or a multi-campus university, we'll help you find the right plan.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Mail className="h-5 w-5 text-primary-600" /> hello@edupulse.ai
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Phone className="h-5 w-5 text-primary-600" /> +91 022 4000 1234
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <MapPin className="h-5 w-5 text-primary-600" /> Nanded, Maharashtra, India
            </div>
          </div>
        </div>

        <Card className="p-8">
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950">
                <Mail className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Message sent</h3>
              <p className="text-sm text-muted-foreground">Our team will get back to you within one business day.</p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <Input label="First name" placeholder="Aditi" required />
                <Input label="Last name" placeholder="Sharma" required />
              </div>
              <Input label="Work email" type="email" placeholder="you@institution.edu" required />
              <Input label="Institution" placeholder="Nanded Institute of Technology" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your institution and what you're looking for…"
                  className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-ring"
                />
              </div>
              <Button type="submit" className="w-full">Send message</Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
