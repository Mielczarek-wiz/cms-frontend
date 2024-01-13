import Image from "next/image";
import LoginForm from "@/components/dashboardSide/forms/loginForms/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col justify-center flex-1 h-full px-6 py-12 lg:px-8">
      <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="/images/logo-default-151x44.png"
          alt="Logo"
          width={151}
          height={44}
        />
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />

        <p className="mt-10 text-sm text-center text-gray-500">
          Not a member?{" "}
          <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Ask administrator for more details
          </span>
        </p>
      </div>
    </div>
  );
}
