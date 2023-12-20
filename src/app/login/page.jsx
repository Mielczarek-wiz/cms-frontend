"use client";
import { useUserStore } from "@/zustand/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const user = useUserStore((state) => state.user);
  const login = useUserStore((state) => state.login);
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          login(), router.push("/dashboard");
        }}
      >
        Log in
      </button>
    </>
  );
}
