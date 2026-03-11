import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const AddTeacher = () => {
  const nav = useNavigate();
  const [course, setCourse] = useState([]);
  console.log("course", course);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getCourse = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/course/get");
      setCourse(res.data.course);
      console.log(course.data.course);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/teacher", data);
      nav("/teacher");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Teacher</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter teacher name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="w-full border rounded-lg p-3"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border rounded-lg p-3"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full border rounded-lg p-3"
              {...register("phone", {
                required: "Phone is required",
              })}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
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
          </div>

          <div>
            <label className="block mb-1 font-medium">Specialization</label>

            <input
              type="text"
              placeholder="e.g. Web Development"
              className="w-full border rounded-lg p-3"
              {...register("specialization", {
                required: "Specialization is required",
              })}
            />
            {errors.specialization && (
              <p className="text-red-500 text-sm">
                {errors.specialization.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover: bg-blue-700 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
