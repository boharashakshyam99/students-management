import React from "react";
import { useForm } from "react-hook-form";
import SideNav from "../component/SideNav";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const EditTeacher = () => {
  const [existingData, setExistingData] = useState([]);
  const nav = useNavigate();
  const { id } = useParams();
  console.log(id);
  async function fetchexistingTeacher(teacherId) {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/teacher/${teacherId}`,
      );
      console.log(res.data.teacher);
      const teacher = res.data.teacher;
      reset({
        email: teacher.email,
        image: teacher.image,
        name: teacher.name,
        phone: teacher.phone,
        specialization: teacher.specialization,
        // course: "",
      });
      setExistingData(teacher);
    } catch (error) {
      console.log(error);
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (existingData) {
      const res = await axios.put(
        `http://localhost:5000/api/teacher/${id}`,
        data,
      );
      console.log(res);
      alert("teacher updated");
      nav("/teacher");
      reset();
    }
  };
  // async function fetchCourse() {
  //   try {
  //     const res = await axios.get("http://localhost:5000/api/course";
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    // fetchCourse();
    if (id) fetchexistingTeacher(id);
  }, [id]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Optional Sidebar */}

      {/* Centered Form */}
      <main className="flex-1 flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">
            Add / Edit Teacher
          </h1>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
              })}
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              {...register("phone", { required: "Phone is required" })}
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Specialization */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialization
            </label>
            <input
              type="text"
              {...register("specialization", { required: "Required" })}
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                errors.specialization ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.specialization && (
              <p className="text-red-500 text-sm mt-1">
                {errors.specialization.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                errors.image ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>
          {/* <div>
            <label className="block mb-1 font-medium">Course</label>
            <select
              className="w-full border rounded-lg p-3"
              {...register("course")}
            >
              {course.map((prev) => (
                <>
                  <option key={prev._id} value={prev.title}>
                    {prev.title}
                  </option>
                </>
              ))}{" "}
            </select>
          </div> */}
          {/* Course */}
          {/* <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course
            </label>
            <select
              {...register("course", { required: "Please select a course" })}
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                errors.course ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a course</option>
              <option value="Math">Mathematics</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="History">History</option>
            </select>
            {errors.course && (
              <p className="text-red-500 text-sm mt-1">
                {errors.course.message}
              </p>
            )}
          </div> */}

          {/* Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-lg transition-all cursor-pointer"
            >
              Reset
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditTeacher;
