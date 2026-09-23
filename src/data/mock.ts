import type {
  Course,
  Assignment,
  Notification,
  StudentRanking,
  ActivityLog,
  ChatMessage,
} from "@/types";

export const currentUser = {
  id: "u-1021",
  name: "Aditi Sharma",
  email: "aditi.sharma@edupulse.ai",
  role: "student" as const,
  avatarColor: "#6366f1",
  program: "B.Tech Computer Science, 3rd Year",
};

export const courses: Course[] = [
  { id: "c1", title: "Data Structures & Algorithms", code: "CS301", instructor: "Dr. R. Menon", progress: 78, credits: 4, color: "#6366f1", nextSession: "Mon, 10:00 AM", studentsEnrolled: 142, status: "active" },
  { id: "c2", title: "Database Management Systems", code: "CS302", instructor: "Prof. K. Iyer", progress: 62, credits: 3, color: "#10b981", nextSession: "Tue, 2:00 PM", studentsEnrolled: 138, status: "active" },
  { id: "c3", title: "Operating Systems", code: "CS303", instructor: "Dr. S. Rao", progress: 45, credits: 4, color: "#3b82f6", nextSession: "Wed, 11:00 AM", studentsEnrolled: 140, status: "active" },
  { id: "c4", title: "Machine Learning Foundations", code: "CS405", instructor: "Dr. A. Verma", progress: 91, credits: 3, color: "#f59e0b", nextSession: "Thu, 9:00 AM", studentsEnrolled: 96, status: "active" },
  { id: "c5", title: "Computer Networks", code: "CS304", instructor: "Prof. N. Das", progress: 100, credits: 3, color: "#8b5cf6", status: "completed", studentsEnrolled: 130 },
  { id: "c6", title: "Cloud Computing", code: "CS410", instructor: "Dr. P. Nair", progress: 0, credits: 3, color: "#ec4899", status: "upcoming", studentsEnrolled: 0 },
];

export const assignments: Assignment[] = [
  { id: "a1", title: "Binary Search Trees Implementation", courseCode: "CS301", dueDate: "2026-08-02", status: "pending", maxGrade: 100 },
  { id: "a2", title: "Normalization Case Study", courseCode: "CS302", dueDate: "2026-08-04", status: "submitted", maxGrade: 50 },
  { id: "a3", title: "Process Scheduling Report", courseCode: "CS303", dueDate: "2026-07-25", status: "graded", grade: 88, maxGrade: 100 },
  { id: "a4", title: "Linear Regression from Scratch", courseCode: "CS405", dueDate: "2026-07-20", status: "graded", grade: 95, maxGrade: 100 },
  { id: "a5", title: "TCP Handshake Simulation", courseCode: "CS304", dueDate: "2026-07-15", status: "late", grade: 62, maxGrade: 100 },
];

export const notifications: Notification[] = [
  { id: "n1", title: "AI Insight Ready", description: "Your weekly performance forecast has been updated.", time: "10m ago", type: "info", read: false },
  { id: "n2", title: "Assignment graded", description: "Process Scheduling Report — 88/100", time: "2h ago", type: "success", read: false },
  { id: "n3", title: "Assignment due soon", description: "Binary Search Trees Implementation due in 3 days", time: "5h ago", type: "warning", read: false },
  { id: "n4", title: "Attendance alert", description: "CS303 attendance dropped below 75%", time: "1d ago", type: "danger", read: true },
  { id: "n5", title: "New course material", description: "Dr. Verma uploaded Week 9 slides for CS405", time: "2d ago", type: "info", read: true },
];

export const weeklyStudyHours = [3.2, 4.1, 2.8, 5.0, 4.4, 1.5, 2.1];
export const weeklyProgress = [62, 65, 68, 70, 74, 76, 78];

export const skillRadar = [
  { name: "Algorithms", value: 82 },
  { name: "Databases", value: 71 },
  { name: "Systems", value: 58 },
  { name: "ML", value: 89 },
  { name: "Networks", value: 74 },
  { name: "Communication", value: 65 },
];

export const attendanceHeatmap: [number, number, number][] = (() => {
  const data: [number, number, number][] = [];
  for (let week = 0; week < 18; week++) {
    for (let day = 0; day < 5; day++) {
      data.push([week, day, Math.round(60 + Math.random() * 40)]);
    }
  }
  return data;
})();

export const rankings: StudentRanking[] = [
  { id: "s1", name: "Aditi Sharma", score: 94, trend: "up", riskLevel: "low" },
  { id: "s2", name: "Rohan Patil", score: 91, trend: "up", riskLevel: "low" },
  { id: "s3", name: "Meera Joshi", score: 87, trend: "flat", riskLevel: "low" },
  { id: "s4", name: "Karan Deshmukh", score: 79, trend: "down", riskLevel: "medium" },
  { id: "s5", name: "Sneha Kulkarni", score: 74, trend: "down", riskLevel: "medium" },
  { id: "s6", name: "Yash Pawar", score: 58, trend: "down", riskLevel: "high" },
  { id: "s7", name: "Priya Naik", score: 55, trend: "flat", riskLevel: "high" },
];

export const activityLogs: ActivityLog[] = [
  { id: "l1", actor: "Dr. A. Verma", action: "published grades for", target: "CS405 — Assignment 4", time: "12m ago", severity: "info" },
  { id: "l2", actor: "System", action: "flagged anomalous login for", target: "user u-2291", time: "38m ago", severity: "warning" },
  { id: "l3", actor: "Admin — R. Kulkarni", action: "granted teacher role to", target: "S. Bhosale", time: "1h ago", severity: "info" },
  { id: "l4", actor: "AI Monitor", action: "detected model latency spike in", target: "AI Tutor service", time: "3h ago", severity: "critical" },
  { id: "l5", actor: "System", action: "completed nightly backup for", target: "production database", time: "6h ago", severity: "info" },
];

export const departmentAnalytics = [
  { name: "Computer Science", students: 612, avgScore: 81, riskCount: 24 },
  { name: "Electronics", students: 480, avgScore: 76, riskCount: 31 },
  { name: "Mechanical", students: 398, avgScore: 71, riskCount: 40 },
  { name: "Civil", students: 302, avgScore: 74, riskCount: 22 },
  { name: "AI & Data Science", students: 210, avgScore: 85, riskCount: 9 },
];

export const initialChat: ChatMessage[] = [
  {
    id: "m1",
    role: "assistant",
    content:
      "Hi Aditi — I've reviewed your last three CS301 submissions. You're strong on tree traversal but consistently lose marks on time-complexity justification. Want a focused walkthrough, a practice set, or a summary of the relevant lecture notes?",
    timestamp: "9:02 AM",
    sources: ["CS301 — Week 7 Lecture Notes.pdf", "Assignment 2 Feedback"],
  },
];

export const suggestedQuestions = [
  "Summarize Week 8 lecture on B-Trees",
  "Generate a 10-question quiz on Big-O notation",
  "Where am I losing the most marks this semester?",
  "Create flashcards for OS process scheduling",
];

export const learningPath = [
  { id: "lp1", title: "Master Time Complexity Analysis", status: "in-progress", progress: 60 },
  { id: "lp2", title: "Normalization & Schema Design", status: "in-progress", progress: 40 },
  { id: "lp3", title: "Process & Thread Scheduling", status: "not-started", progress: 0 },
  { id: "lp4", title: "Linear & Logistic Regression", status: "completed", progress: 100 },
];
