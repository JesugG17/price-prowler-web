export interface AuthResponse {
  token?: string;
  message?: string;
  data?: { name: string },
  ok: boolean;
}

export interface GoogleResponse {
  data: { user: { name: string, photo: string } },
  token: string;
  message: string;
  ok: boolean;
}