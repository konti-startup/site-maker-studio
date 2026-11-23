import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { loginRequest } from "@/lib/api";

const TOKEN_KEY = "caramuri_auth_token";
const LABEL_KEY = "caramuri_auth_label";

type AuthContextValue = {
  token: string | null;
  userLabel: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY));
  const [userLabel, setUserLabel] = useState<string | null>(() => localStorage.getItem(LABEL_KEY));

  const login = useCallback(async (username: string, password: string) => {
    const data = await loginRequest({ username, password });
    const t = data.token ?? data.access_token ?? data.accessToken;
    if (!t) {
      throw new Error("O servidor não enviou um token. Ajuste a resposta de POST /api/login.");
    }
    setToken(t);
    localStorage.setItem(TOKEN_KEY, t);
    const label =
      data.user?.name ?? data.user?.email ?? data.user?.username ?? username;
    setUserLabel(label);
    localStorage.setItem(LABEL_KEY, label);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserLabel(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(LABEL_KEY);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      userLabel,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token, userLabel, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return ctx;
}
