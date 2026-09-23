export type Role = "student" | "teacher" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarColor: string;
  program?: string;
  department?: string;
}

export interface Course {
  id: string;
  title: string;
  code: string;
  instructor: string;
  progress: number;
  credits: number;
  color: string;
  nextSession?: string;
  studentsEnrolled?: number;
  status: "active" | "completed" | "upcoming";
}

export interface Assignment {
  id: string;
  title: string;
  courseCode: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded" | "late";
  grade?: number;
  maxGrade: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  topic: string;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "info" | "success" | "warning" | "danger";
  read: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  sources?: string[];
}

export interface StudentRanking {
  id: string;
  name: string;
  score: number;
  trend: "up" | "down" | "flat";
  riskLevel: "low" | "medium" | "high";
}

export interface ActivityLog {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
  severity: "info" | "warning" | "critical";
}
