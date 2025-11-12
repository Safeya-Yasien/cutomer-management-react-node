import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User } from "lucide-react";
import InputField from "@/components/InputField";
import { signupSchema, type SignupFormData } from "@/schemas/signupSchema";
import { Link } from "react-router";

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Signup data:", data);
    // Call your signup API here
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Get Started
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          icon={User}
          placeholder="Full Name"
          register={register("fullName")}
          error={errors.fullName?.message}
        />
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
        <InputField
          icon={Lock}
          placeholder="Confirm Password"
          type="password"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
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
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-semibold text-indigo-500 hover:text-indigo-400 transition duration-150"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
