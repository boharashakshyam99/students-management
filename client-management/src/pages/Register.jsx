import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="shadow-lg rounded-md border p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-white">
          <h1 className="text-4xl font-semibold text-center">Register</h1>

          {/* Name */}
          <label className="block text-base font-medium mt-3">Name:</label>
          <input
            className="border w-full px-2 py-1 focus:outline-none"
            type="text"
            placeholder="First Name"
            {...register("name", {
              required: "Please enter a name",
              maxLength: {
                value: 15,
                message: "Max 15 characters",
              },
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters allowed",
              },
            })}
          />
          <p className="text-red-600">{errors.name?.message}</p>

          {/* Email */}
          <label className="block text-base font-medium mt-3">Email:</label>
          <input
            className="border w-full px-2 py-1 focus:outline-none"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email",
              },
            })}
          />
          <p className="text-red-600">{errors.email?.message}</p>

          {/* Password */}
          <label className="block text-base font-medium mt-3">Password:</label>
          <input
            className="border w-full px-2 py-1 focus:outline-none"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 4,
                message: "Minimum 4 characters",
              },
            })}
          />
          <p className="text-red-600">{errors.password?.message}</p>

          {/* Birth Date */}
          <label className="block text-base font-medium mt-3">
            Birth Date:
          </label>
          <input
            className="border w-full px-2 py-1 focus:outline-none"
            type="datetime-local"
            {...register("birthdate", {
              required: "Birth date required",
            })}
          />
          <p className="text-red-600">{errors.birthdate?.message}</p>

          {/* Gender */}
          <label className="block text-base font-medium mt-3">Gender:</label>
          <div>
            <input
              type="radio"
              value="male"
              {...register("gender", { required: "Select gender" })}
            />
            <label className="ml-1">Male</label>

            <input
              type="radio"
              value="female"
              className="ml-4"
              {...register("gender")}
            />
            <label className="ml-1">Female</label>
          </div>
          <p className="text-red-600">{errors.gender?.message}</p>

          {/* Country */}
          <label className="block text-base font-medium mt-3">Country:</label>
          <select
            {...register("country", { required: "Select country" })}
            className="border w-full px-2 py-1"
          >
            <option value="">Select</option>
            <option value="Nepal">Nepal</option>
            <option value="China">China</option>
            <option value="India">India</option>
          </select>
          <p className="text-red-600">{errors.country?.message}</p>

          {/* Image */}
          <label className="block mt-3">Image Link:</label>
          <input
            type="text"
            placeholder="profile_image"
            {...register("profile_image")}
            className="border w-full px-2 py-1"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white py-2 w-full rounded-md mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
