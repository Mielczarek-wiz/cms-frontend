import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: { name: null, email: null },
      login: () => {
        set(() => ({
          user: {
            name: "Tom Cook",
            email: "tom@example.com",
          },
        }));
      },
      logout: () => {
        set(() => ({ user: { name: null, email: null } }));
      },
    }),
    {
      name: "user",
    }
  )
);
