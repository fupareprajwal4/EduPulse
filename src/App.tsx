import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

import { PublicLayout } from "@/components/layout/PublicLayout";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProtectedRoute } from "@/routes/ProtectedRoute";

import { Landing } from "@/pages/marketing/Landing";
import { About } from "@/pages/marketing/About";
import { Features } from "@/pages/marketing/Features";
import { Pricing } from "@/pages/marketing/Pricing";
import { Contact } from "@/pages/marketing/Contact";

import { Login } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import { ForgotPassword } from "@/pages/auth/ForgotPassword";
import { OtpVerification } from "@/pages/auth/OtpVerification";
import { ResetPassword } from "@/pages/auth/ResetPassword";

import { StudentDashboard } from "@/pages/student/Dashboard";
import { AIWorkspace } from "@/pages/student/AIWorkspace";
import { StudentCourses } from "@/pages/student/Courses";
import { CourseDetails } from "@/pages/student/CourseDetails";
import { StudentAssignments } from "@/pages/student/Assignments";
import { AssignmentDetails } from "@/pages/student/AssignmentDetails";
import { QuizDashboard } from "@/pages/student/QuizDashboard";
import { QuizPlayer } from "@/pages/student/QuizPlayer";
import { QuizResult } from "@/pages/student/QuizResult";
import { Performance } from "@/pages/student/Performance";
import { LearningPath } from "@/pages/student/LearningPath";
import { Recommendations } from "@/pages/student/Recommendations";
import { StudentCalendar } from "@/pages/student/Calendar";

import { TeacherDashboard } from "@/pages/teacher/Dashboard";
import { TeacherCourses } from "@/pages/teacher/Courses";
import { TeacherAnalytics } from "@/pages/teacher/Analytics";
import { TeacherAttendance } from "@/pages/teacher/Attendance";
import { QuizGenerator } from "@/pages/teacher/QuizGenerator";

import { AdminDashboard } from "@/pages/admin/Dashboard";
import { AdminUsers } from "@/pages/admin/Users";
import { AdminDepartments } from "@/pages/admin/Departments";
import { AIMonitoring } from "@/pages/admin/AIMonitoring";
import { AdminActivityLogs } from "@/pages/admin/ActivityLogs";

import { Profile } from "@/pages/shared/Profile";
import { Settings } from "@/pages/shared/Settings";
import { NotificationCenter } from "@/pages/shared/NotificationCenter";
import { HelpCenter } from "@/pages/shared/HelpCenter";
import { Privacy } from "@/pages/shared/Privacy";
import { Terms } from "@/pages/shared/Terms";
import { NotFound } from "@/pages/shared/NotFound";
import { ServerError } from "@/pages/shared/ServerError";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              {/* Marketing */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Route>

              {/* Auth */}
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/verify-otp" element={<OtpVerification />} />
                <Route path="/reset-password" element={<ResetPassword />} />
              </Route>

              {/* Student */}
              <Route element={<ProtectedRoute allow={["student"]} />}>
                <Route element={<DashboardLayout role="student" />}>
                  <Route path="/student" element={<StudentDashboard />} />
                  <Route path="/student/ai-workspace" element={<AIWorkspace />} />
                  <Route path="/student/courses" element={<StudentCourses />} />
                  <Route path="/student/courses/:courseId" element={<CourseDetails />} />
                  <Route path="/student/assignments" element={<StudentAssignments />} />
                  <Route path="/student/assignments/:assignmentId" element={<AssignmentDetails />} />
                  <Route path="/student/quizzes" element={<QuizDashboard />} />
                  <Route path="/student/quizzes/:quizId/play" element={<QuizPlayer />} />
                  <Route path="/student/quizzes/:quizId/result" element={<QuizResult />} />
                  <Route path="/student/performance" element={<Performance />} />
                  <Route path="/student/learning-path" element={<LearningPath />} />
                  <Route path="/student/recommendations" element={<Recommendations />} />
                  <Route path="/student/calendar" element={<StudentCalendar />} />
                </Route>
              </Route>

              {/* Teacher */}
              <Route element={<ProtectedRoute allow={["teacher"]} />}>
                <Route element={<DashboardLayout role="teacher" />}>
                  <Route path="/teacher" element={<TeacherDashboard />} />
                  <Route path="/teacher/courses" element={<TeacherCourses />} />
                  <Route path="/teacher/analytics" element={<TeacherAnalytics />} />
                  <Route path="/teacher/attendance" element={<TeacherAttendance />} />
                  <Route path="/teacher/quiz-generator" element={<QuizGenerator />} />
                </Route>
              </Route>

              {/* Admin */}
              <Route element={<ProtectedRoute allow={["admin"]} />}>
                <Route element={<DashboardLayout role="admin" />}>
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/users" element={<AdminUsers />} />
                  <Route path="/admin/departments" element={<AdminDepartments />} />
                  <Route path="/admin/ai-monitoring" element={<AIMonitoring />} />
                  <Route path="/admin/logs" element={<AdminActivityLogs />} />
                </Route>
              </Route>

              {/* Shared authenticated pages — reuse student shell by default */}
              <Route element={<ProtectedRoute allow={["student", "teacher", "admin"]} />}>
                <Route element={<DashboardLayout role="student" />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/notifications" element={<NotificationCenter />} />
                  <Route path="/help" element={<HelpCenter />} />
                </Route>
              </Route>

              <Route path="/500" element={<ServerError />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
