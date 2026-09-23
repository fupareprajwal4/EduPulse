import { useEffect, useRef, useState } from "react";
import {
  FileText, Search, Sparkles, Mic, Copy, Download, Maximize2, Send,
  BookOpen, ListChecks, Layers, ChevronDown,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { initialChat, suggestedQuestions, courses } from "@/data/mock";
import type { ChatMessage } from "@/types";

const documents = [
  { name: "CS301 — Week 7 Lecture Notes.pdf", course: "CS301" },
  { name: "CS302 — Normalization Guide.pdf", course: "CS302" },
  { name: "CS303 — Scheduling Slides.pdf", course: "CS303" },
  { name: "CS405 — Regression Notebook.pdf", course: "CS405" },
];

function TypingDots() {
  return (
    <div className="flex gap-1 px-1 py-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </div>
  );
}

export function AIWorkspace() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChat);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", content: text, timestamp: "Just now" };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Here's a focused explanation: think of process scheduling as deciding *which* ready process gets the CPU next. Round Robin gives every process a fixed time slice; SJF prioritizes the shortest burst time; Priority Scheduling can starve low-priority processes without aging. Want a practice set on this, or a visual timeline comparing these algorithms?",
          timestamp: "Just now",
          sources: ["CS303 — Scheduling Slides.pdf"],
        },
      ]);
    }, 1400);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-5">
      {/* Left panel */}
      <div className="hidden w-72 shrink-0 flex-col gap-4 lg:flex">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Search sources…"
            className="h-10 w-full rounded-lg border border-border bg-surface pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus-ring"
          />
        </div>

        <Card className="flex-1 overflow-y-auto p-3">
          <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Knowledge sources</p>
          <div className="mt-1 space-y-1">
            {documents.map((d) => (
              <button key={d.name} className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-foreground hover:bg-muted focus-ring">
                <FileText className="h-4 w-4 shrink-0 text-primary-600" />
                <span className="min-w-0 flex-1 truncate">{d.name}</span>
              </button>
            ))}
          </div>

          <p className="mt-4 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Courses</p>
          <div className="mt-1 space-y-1">
            {courses.filter((c) => c.status === "active").map((c) => (
              <button key={c.id} className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-foreground hover:bg-muted focus-ring">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="min-w-0 flex-1 truncate">{c.title}</span>
              </button>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-2">
          {[{ icon: ListChecks, label: "Quiz" }, { icon: BookOpen, label: "Summary" }, { icon: Layers, label: "Flashcards" }].map((a) => (
            <button key={a.label} className="flex flex-col items-center gap-1 rounded-lg border border-border bg-surface py-2.5 text-xs font-medium text-foreground hover:bg-muted focus-ring">
              <a.icon className="h-4 w-4 text-primary-600" />
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right panel — chat */}
      <Card className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">AI Tutor</p>
              <p className="text-xs text-muted-foreground">Grounded in your course materials</p>
            </div>
          </div>
          <Button variant="ghost" size="icon"><Maximize2 className="h-4 w-4" /></Button>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
          {messages.map((m) => (
            <div key={m.id} className={cn("flex gap-3", m.role === "user" && "flex-row-reverse")}>
              {m.role === "assistant" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
              )}
              <div className={cn("max-w-[75%] space-y-2", m.role === "user" && "flex flex-col items-end")}>
                <div
                  className={cn(
                    "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    m.role === "user" ? "bg-primary-600 text-white" : "bg-muted text-foreground"
                  )}
                >
                  {m.content}
                </div>
                {m.sources && (
                  <div className="flex flex-wrap gap-1.5">
                    {m.sources.map((s) => (
                      <span key={s} className="flex items-center gap-1 rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] text-muted-foreground">
                        <FileText className="h-3 w-3" /> {s}
                      </span>
                    ))}
                  </div>
                )}
                {m.role === "assistant" && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <button className="hover:text-foreground"><Copy className="h-3.5 w-3.5" /></button>
                    <button className="hover:text-foreground"><Download className="h-3.5 w-3.5" /></button>
                  </div>
                )}
              </div>
            </div>
          ))}
          {thinking && (
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="rounded-2xl bg-muted px-2"><TypingDots /></div>
            </div>
          )}
        </div>

        <div className="border-t border-border p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground hover:bg-muted focus-ring"
              >
                {q}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2"
          >
            <button type="button" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted focus-ring">
              <Mic className="h-4 w-4" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about any course, assignment, or topic…"
              className="h-10 flex-1 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-ring"
            />
            <Button type="submit" size="icon"><Send className="h-4 w-4" /></Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
