"use client";
import { useUserStore } from "@/zustand/useUserStore";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function WithAuth({ children }) {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (!user.name) {
      router.replace("/login");
    } else {
      setIsLoading(false);
    }
  }, [user.name, router]);

  return <>{isLoading ? null : children}</>;
}
