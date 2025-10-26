import InputFiled from "@/components/InputFiled";
import { CustomerSchema, type ICustomerForm } from "@/schemas/customerSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

// const defaultValues: ICustomerForm = {
//   firstName: "",
//   lastName: "",
//   gender: "",
//   country: "",
//   age: 16,
//   phone: "",
//   email: "",
// };

const AddCustomerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerForm>({
    resolver: zodResolver(CustomerSchema),
    // defaultValues: defaultValues,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-[#252A30]  p-8">
      <h2 className="text-white text-2xl font-semibold mb-6 text-left">
        Add Customer
      </h2>

      <form
        className="grid grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Left Column */}
        <div className="space-y-4">
          {/* First Name */}
          <InputFiled
            register={register}
            name="firstName"
            placeholder="Enter first name"
            label="First Name"
            error={errors.firstName}
          />

          {/* Gender */}
          <div>
            <label className="text-gray-300 mb-1 block">Gender</label>
            <select
              className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              {...register("gender", { required: true })}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age */}
          <InputFiled
            register={register}
            name="age"
            placeholder="Enter your age"
            label="Age"
            type="number"
            error={errors.age}
          />

          {/* Email */}

          <InputFiled
            register={register}
            name="email"
            placeholder="Enter your email"
            label="Email"
            type="email"
            error={errors.email}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Last Name */}
          <InputFiled
            register={register}
            name="lastName"
            placeholder="Enter your last name"
            label="Last Name"
            error={errors.lastName}
          />

          {/* Country */}
          <InputFiled
            register={register}
            name="country"
            placeholder="Enter your country"
            label="Country"
            error={errors.country}
          />

          {/* Phone */}
          <InputFiled
            register={register}
            name="phone"
            placeholder="Enter your phone number"
            label="Phone"
            error={errors.phone}
          />

          {/* Submit Button */}
          <div className="flex items-end mt-11">
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md font-semibold transition"
            >
              Add Customer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCustomerForm;
