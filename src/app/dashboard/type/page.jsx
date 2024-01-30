"use client";
import PageComponent from "@/components/dashboardSide/PageComponent";
import { useUserStore } from "@/zustand/useUserStore";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function Types() {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const header = ["ID", "Type", "Hidden", "User"];
  const redirectIfModeratorOrNotLogged = useCallback(() => {
    if (
      user.role === "Moderator" ||
      (user.role === null &&
        user.name === null &&
        user.email === null &&
        user.token === null)
    ) {
      router.push("/login");
    }
  }, [user.role, user.name, user.email, user.token, router]);

  useEffect(() => {
    redirectIfModeratorOrNotLogged();
  }, [redirectIfModeratorOrNotLogged]);
  return <PageComponent form={"Types"} header={header} initialRows={[]} />;
}
