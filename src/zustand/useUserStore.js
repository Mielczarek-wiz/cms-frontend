import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: { name: null, email: null, role: null, token: null },
      login: ({ name, email, role, accessToken }) => {
        set(() => ({
          user: {
            name: name,
            email: email,
            role: role,
            token: accessToken,
          },
        }));
      },
      logout: () => {
        set(() => ({
          user: { name: null, email: null, role: null, token: null },
        }));
      },
    }),
    {
      name: "user",
    }
  )
);
