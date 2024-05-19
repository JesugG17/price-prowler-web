import { api } from "@/common/services/api/api";
import { AuthResponse, GoogleResponse } from "@/common/types/auth-response";
import { User } from "@/common/types/user.interface";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  isAuthenticated: boolean;
  user: User | null;
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
  googleSignIn: (code: string) => Promise<void>;
  logout: () => void;
}

type Store = State & Actions;

export const useAuthStore = create<Store>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: async ({ email, password }) => {
        const { data } = await api.post<AuthResponse>('/auth/login', {
          email, password
        });

        if (!data.ok) {
          toast.error(data.message!);
          throw new Error('Error');
        }

        const persitedData = {
          token: data.token,
          user: data.data?.name,
          isAuthenticated: true
        };

        localStorage.setItem('data', JSON.stringify(persitedData));

        set({
          isAuthenticated: true,
          user: { name: data.data?.name as string }
        });
      },
      register: async (registration: UserRegistration) => {
        const { data } = await api.post<AuthResponse>('/auth/register', registration);

        if (!data.ok) {
          toast.error(data.message!);
          throw new Error('Error');
        }

        toast.success(data.message!);
      },
      googleSignIn: async (code: string) => {
        const { data } = await api.post<GoogleResponse>('/auth/google', {
          code
        });

        if (!data.ok) {
          toast.error(data.message);
          return;
        }

        toast.success(data.message);
        const persitedData = {
          token: data.token,
          user: data.data.user.name,
          isAuthenticated: true
        };

        localStorage.setItem('data', JSON.stringify(persitedData));

        set({
          isAuthenticated: true,
          user: { name: data.data.user.name, photo: data.data.user.photo }
        });
      },
      logout: () => {
        localStorage.clear();
        set({
          isAuthenticated: false,
          user: null,
        })
      }
    }),
    {
      name: 'data',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)