export interface AuthResponse {
  token?: string;
  message?: string;
  data?: { name: string },
  ok: boolean;
}