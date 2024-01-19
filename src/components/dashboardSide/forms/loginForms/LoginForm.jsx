"use client";
import { useCall } from "@/api/apiCalls";
import { useUserStore } from "@/zustand/useUserStore";
import Input from "../components/Input";
import Submit from "../components/Submit";
import { useRouter } from "next/navigation";
import { getRoute } from "@/api/apiRoutes";
import { useForm } from "react-hook-form";
import { getNavigation } from "@/app/dashboard/routes/navigation";

export default function LoginForm() {
  const login = useUserStore((state) => state.login);
  const { call } = useCall();
  const router = useRouter();
  const onSubmit = async (data) => {
    const res = await call("post", getRoute("auth"), {
      email: data.email,
      password: data.password,
    });

    login(res);
    if (typeof window !== "undefined" && window.localStorage) {
      router.push(getNavigation(localStorage.getItem("current")).href);
    } else {
      router.push("/dashboard/general");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={"email"}
        register={register}
        required={"Email is required"}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <Input
        label={"password"}
        register={register}
        type="password"
        required={"Password is required"}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <Submit />
    </form>
  );
}
