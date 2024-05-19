import { api } from "@/common/services/api/api";
import { AuthResponse } from "@/common/types/auth-response";
import toast from "react-hot-toast";
import { create } from "zustand";

interface State {
  isAuthenticated: boolean;
  user: string;
}

interface UserCredentials {
  email: string;
  password: string;
}

interface UserRegistration extends UserCredentials {
  name: string;
}

interface Actions {
  login: (credentials: UserCredentials) => Promise<void>;
  register: (register: UserRegistration) => Promise<void>;
}

type Store = State & Actions;

export const useAuthStore = create<Store>((set) => ({
  isAuthenticated: false,
  user: '',
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
      isAuthenticated: true,
      user: data.data?.name as string
    });
  },
  register: async (registration: UserRegistration) => {
    const { data } = await api.post<AuthResponse>('/auth/register', registration);

    if (!data.ok) {
      toast.error(data.message!);
      throw new Error('Error');
    }

    toast.success(data.message!);
  }
}));