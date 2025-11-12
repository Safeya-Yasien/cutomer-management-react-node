import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  placeholder: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  icon: Icon,
  placeholder,
  type = "text",
  register,
  error,
}) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="h-5 w-5 text-gray-400" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      className={`block w-full pl-10 pr-4 py-3 bg-white/10 text-white placeholder-gray-400 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 transition duration-150 ${
        error ? "border-red-500" : "border-white/20"
      }`}
    />
    {error && (
      <span className="absolute left-0 bottom-[-1.25rem] text-red-400 text-sm">
        {error}
      </span>
    )}
  </div>
);

export default InputField;
