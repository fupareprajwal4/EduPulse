# EduPulse AI — Intelligent Learning Analytics & Student Success Platform

A complete frontend for an AI-powered learning analytics SaaS: student, teacher, and admin dashboards, an AI Tutor workspace, quiz generation, and predictive analytics — built with React 19, TypeScript, Vite, Tailwind CSS, and Apache ECharts.

## Getting started

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173.

## Try each role

Log in from `/login` and pick **Student**, **Teacher**, or **Admin** at the top of the form — the mock auth context accepts any email/password and drops you straight into that role's dashboard.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS (custom design tokens in `tailwind.config.ts`)
- React Router v6 for routing, React Query for data-fetching scaffolding
- Apache ECharts (`echarts-for-react`) for all data visualization
- Framer Motion for page/hero animation
- Lucide React icons

## Project structure

```
src/
  components/
    ui/         reusable primitives (Button, Card, Table, Dialog, Tabs, ...)
    layout/      Sidebar, Topbar, CommandPalette, public/auth/dashboard layouts
    charts/      ECharts wrappers (line, bar, radar, gauge, heatmap, donut)
  pages/
    marketing/   Landing, About, Features, Pricing, Contact
    auth/        Login, Register, Forgot/Reset Password, OTP
    student/     Dashboard, AI Workspace, Courses, Assignments, Quizzes, Performance, ...
    teacher/     Dashboard, Courses, Analytics, Attendance, Quiz Generator
    admin/       Dashboard, Users, Departments, AI Monitoring, Activity Logs
    shared/      Profile, Settings, Notifications, Help Center, legal, 404/500
  context/       Theme + Auth React contexts
  data/          mock/dummy data standing in for a real backend
  types/         shared TypeScript interfaces
```

## Connecting a real backend

Every page currently reads from `src/data/mock.ts`. Swap these for real API calls (see `src/services` for where an Axios/React Query layer would live) — component props and shapes already match the `src/types` interfaces, so most pages won't need structural changes.
