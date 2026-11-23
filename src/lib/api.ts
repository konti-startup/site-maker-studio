const rawBase = import.meta.env.VITE_API_BASE_URL ?? "https://caramuri.pythonanywhere.com";

export const API_BASE_URL = rawBase.replace(/\/$/, "");

export type NewsItem = {
  id: string;
  title: string;
  category: string;
  content: string;
  image: string;
  date: string;
};

export async function fetchNews(): Promise<NewsItem[]> {
  const res = await fetch(`${API_BASE_URL}/api/news`);
  if (!res.ok) {
    throw new Error(`Não foi possível carregar as notícias (${res.status}).`);
  }
  const data = (await res.json()) as unknown;
  if (!Array.isArray(data)) {
    throw new Error("Resposta inválida do servidor.");
  }
  return data as NewsItem[];
}

export type LoginResponse = {
  token?: string;
  access_token?: string;
  accessToken?: string;
  message?: string;
  user?: { name?: string; email?: string; username?: string };
  error?: string;
};

export async function loginRequest(credentials: { username: string; password: string }): Promise<LoginResponse> {
  const res = await fetch(`${API_BASE_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (res.status === 404) {
    throw new Error(
      "Rota de login não encontrada no servidor. No Flask, exponha POST /api/login que devolva JSON com token (ex.: access_token ou token) e opcionalmente user.",
    );
  }

  const data = (await res.json().catch(() => ({}))) as LoginResponse;

  if (!res.ok) {
    throw new Error(data.error || data.message || `Falha no login (${res.status}).`);
  }

  return data;
}

export type CreateNewsPayload = {
  title: string;
  category: string;
  content: string;
  image: string;
};

export async function createNewsRequest(payload: CreateNewsPayload, token?: string | null): Promise<NewsItem> {
  const res = await fetch(`${API_BASE_URL}/api/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => ({}))) as Partial<NewsItem> & { error?: string; message?: string };

  if (!res.ok) {
    throw new Error(data.error || data.message || `Não foi possível criar a notícia (${res.status}).`);
  }

  if (!data.id || !data.title) {
    throw new Error("Resposta inválida do servidor ao criar a notícia.");
  }

  return data as NewsItem;
}

export async function uploadNewsImage(file: File, token?: string | null): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE_URL}/api/upload`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData,
  });

  const data = (await res.json().catch(() => ({}))) as { error?: string; url?: string };

  if (!res.ok) {
    throw new Error(data.error || `Não foi possível enviar a imagem (${res.status}).`);
  }

  if (!data.url) {
    throw new Error("O servidor não retornou a URL da imagem enviada.");
  }

  return data.url;
}
