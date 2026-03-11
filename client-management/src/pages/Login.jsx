import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-96 p-6 rounded-md bg-white border shadow-lg">
        <h1 className="text-4xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <label className="block text-base mb-1 font-medium">Email</label>
          <input
            className="border w-full text-base px-3 py-2 rounded-lg focus:outline-none"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Please enter a valid email",
              minLength: {
                value: 5,
                message: "Email must be at least 5 characters",
              },
              maxLength: {
                value: 30,
                message: "Email cannot exceed 30 characters",
              },
              pattern: {
                value: /^[\\w-]+@([\\w-]+\\.)+[\\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          <p className="text-red-600 text-sm">{errors.email?.message}</p>

          {/* Password */}
          <label className="block text-base mt-4 mb-1 font-medium">
            Password
          </label>
          <input
            className="border w-full text-base px-3 py-2 rounded-lg focus:outline-none"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Please enter a password",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
              maxLength: {
                value: 15,
                message: "Password cannot exceed 15 characters",
              },
            })}
          />
          <p className="text-red-600 text-sm">{errors.password?.message}</p>

          {/* Remember me */}
          <div className="flex items-center mt-4">
            <input type="checkbox" {...register("rememberMe")} />
            <span className="ml-2 text-sm">Remember me</span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-5 bg-black text-white py-2 w-full rounded-md hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
