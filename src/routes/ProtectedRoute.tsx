import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import type { Role } from "@/types";

export function ProtectedRoute({ allow }: { allow: Role[] }) {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (user && !allow.includes(user.role)) return <Navigate to={`/${user.role}`} replace />;
  return <Outlet />;
}
