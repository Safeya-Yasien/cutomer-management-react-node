import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";
import InputField from "@/components/InputField";
import { loginSchema, type LoginFormData } from "@/schemas/loginSchema";
import { Link } from "react-router";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Welcome Back
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <InputField
          icon={Mail}
          placeholder="Email"
          register={register("email")}
          error={errors.email?.message}
        />
        <InputField
          icon={Lock}
          placeholder="Password"
          type="password"
          register={register("password")}
          error={errors.password?.message}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-xl text-white font-semibold transition duration-200 ${
            isSubmitting
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="font-semibold text-indigo-500 hover:text-indigo-400 transition duration-150"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
