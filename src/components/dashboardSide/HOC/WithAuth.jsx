"use client";
import { useUserStore } from "@/zustand/useUserStore";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function WithAuth({ children }) {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const redirectIfNotLogged = useCallback(() => {
    if (
      user.role === null &&
      user.name === null &&
      user.email === null &&
      user.token === null
    ) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [user.role, user.email, user.name, user.token, router]);

  useEffect(() => {
    redirectIfNotLogged();
  }, [redirectIfNotLogged]);

  return <>{isLoading ? null : children}</>;
}
