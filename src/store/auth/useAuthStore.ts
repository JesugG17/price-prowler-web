import { api } from "@/common/services/api/api";
import { AuthResponse } from "@/common/types/auth-response";
import toast from "react-hot-toast";
import { create } from "zustand";

interface State {
  isAuthenticated: boolean;
}

interface UserCredentials {
  email: string;
  password: string;
}

interface Actions {
  login: (credentials: UserCredentials) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

type Store = State & Actions;

export const useAuthStore = create<Store>((set, get) => ({
  isAuthenticated: false,
  login: async ({ email, password }) => {
    const { data } = await api.post<AuthResponse>('/auth/login', {
      email, password
    });

    if (!data.ok) {
      toast.error(data.message!);
      throw new Error('Error');
    }

    localStorage.setItem('token', data.token!);

    set({
      isAuthenticated: true
    });
  },
  register: async (email: string, password: string) => {

  }
}));