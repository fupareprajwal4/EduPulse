import { createContext, useContext, useState, type ReactNode } from "react";
import type { Role, User } from "@/types";
import { currentUser } from "@/data/mock";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, role?: Role) => void;
  logout: () => void;
  switchRole: (role: Role) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, role: Role = "student") => {
    setUser({ ...currentUser, email: email || currentUser.email, role });
  };

  const logout = () => setUser(null);

  const switchRole = (role: Role) => {
    setUser((u) => (u ? { ...u, role } : u));
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout, switchRole }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
