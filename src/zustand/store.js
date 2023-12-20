import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create(
  persist((set) => ({
    user: {},
    login: () => {
      set(() => ({
        user: {
          name: "Tom Cook",
          email: "tom@example.com",
        },
      }));
    },
    logout: () => {
      set({ user: {} });
    },
  })),
  {
    name: "user",
    storage: createJSONStorage(() => sessionStorage)
  }
);
