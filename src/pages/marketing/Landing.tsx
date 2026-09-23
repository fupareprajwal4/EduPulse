import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, BarChart3, BrainCircuit, ShieldCheck, Zap, Users, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LineAreaChart } from "@/components/charts/LineAreaChart";
import { RadarSkillChart } from "@/components/charts/RadarSkillChart";
import { weeklyProgress, skillRadar } from "@/data/mock";

const logos = ["Ashoka University", "IIT Nanded", "VNIT", "BITS Pilani", "SRM Institute"];

const features = [
  { icon: BrainCircuit, title: "AI Tutor, always on", desc: "A tutor that reads every submission, spots the weak topic, and explains it back in plain language." },
  { icon: BarChart3, title: "Predictive analytics", desc: "Forecast performance weeks ahead and flag at-risk students before a grade ever slips." },
  { icon: Zap, title: "Instant quiz generation", desc: "Turn any lecture, PDF, or syllabus into a graded quiz in under a minute." },
  { icon: ShieldCheck, title: "Enterprise-grade security", desc: "Role-based access, audit logs, and SOC2-aligned infrastructure from day one." },
];

const steps = [
  { title: "Connect your courses", desc: "Import courses, rosters, and materials from your existing LMS in minutes." },
  { title: "Let the AI learn your students", desc: "EduPulse studies submissions, quizzes, and attendance to build a live skill profile per student." },
  { title: "Act on the insight", desc: "Educators get ranked interventions; students get a personalized study plan." },
];

export function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-background to-background dark:from-primary-950/40 dark:via-background dark:to-background" />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300">
                <Sparkles className="h-3.5 w-3.5" /> Now with predictive performance forecasting
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Learning analytics that catch problems <span className="text-gradient">before the exam does.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                EduPulse AI pairs an always-on tutor with predictive analytics, so every student gets attention and every educator sees what's coming.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/register"><Button size="lg">Start free trial <ArrowRight className="h-4 w-4" /></Button></Link>
                <Link to="/features"><Button size="lg" variant="secondary">See how it works</Button></Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> No credit card required</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> 14-day full access</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <Card className="p-5 shadow-elevated">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Weekly progress</p>
                    <p className="text-2xl font-bold text-foreground">78%</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    +12% this week
                  </span>
                </div>
                <LineAreaChart categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} data={weeklyProgress} height={180} />
                <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Skill coverage</p>
                    <RadarSkillChart data={skillRadar.slice(0, 5)} height={180} />
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <div className="rounded-lg bg-muted p-3">
                      <p className="text-xs text-muted-foreground">Risk students flagged</p>
                      <p className="text-lg font-bold text-foreground">3</p>
                    </div>
                    <div className="rounded-lg bg-muted p-3">
                      <p className="text-xs text-muted-foreground">AI insights this week</p>
                      <p className="text-lg font-bold text-foreground">27</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {logos.map((l) => (
              <span key={l} className="text-sm font-semibold tracking-wide text-muted-foreground">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Everything an academic team needs, in one platform</h2>
          <p className="mt-3 text-muted-foreground">Built for institutions that want more than a gradebook.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="p-6 hover:shadow-elevated transition-shadow">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950">
                <f.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Live in three steps</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <span className="text-5xl font-extrabold text-primary-100 dark:text-primary-900">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Card className="flex flex-col items-center gap-6 bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-center shadow-glow">
          <Users className="h-10 w-10 text-white" />
          <h2 className="max-w-lg text-3xl font-bold text-white">Bring predictive analytics to your institution</h2>
          <p className="max-w-md text-primary-100">Join educators using EduPulse AI to catch struggling students weeks before an exam does.</p>
          <Link to="/register"><Button size="lg" variant="secondary">Start your free trial</Button></Link>
        </Card>
      </section>
    </div>
  );
}
