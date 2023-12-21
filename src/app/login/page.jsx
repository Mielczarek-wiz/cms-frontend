"use client";
import { useUserStore } from "@/zustand/useUserStore";
import { useRouter } from "next/navigation";

export default function Login() {
  const login = useUserStore((state) => state.login);
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {login(), router.push('/dashboard')}}
      >
        Log in
      </button>
    </>
  );
}
