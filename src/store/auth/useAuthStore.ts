import { create } from "zustand";

interface State {
  isAuthenticated: boolean;
}

interface Actions {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

type Store = State & Actions;

export const useAuthStore = create<Store>(() => ({
  isAuthenticated: false,
  login: async (email: string, password: string) => {

  },
  register: async (email: string, password: string) => {

  }
}));