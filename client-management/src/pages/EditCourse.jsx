import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import axios from "axios";

const EditCourse = () => {
  const { id } = useParams();
  const [existingData, setExistingData] = useState([]);
  console.log(id);
  const {
    register,
    handleSubmit,
    // // setValue,
    reset,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();

  const onSubmit = async (data) => {
    if (existingData) {
      try {
        await axios.put(`http://localhost:5000/api/course/${id}`, data);
        alert("Course updated successfully");
        nav("/course");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post(`http://localhost:5000/api/course/${id}`, data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  async function getCourseId() {
    const res = await axios.get(`http://localhost:5000/api/course/${id}`);
    console.log("response", res.data.course);
    setExistingData(res.data.course);
    const course = res.data.course;
    reset({
      title: course.title,
      desc: course.desc,
      image: course.image,
      price: course.price,
    });
  }

  useEffect(() => {
    if (id) getCourseId();
  }, [id]);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Update Course
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Title
              </label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows="4"
                {...register("desc")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="text"
                {...register("image")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (Rs)
              </label>
              <input
                type="number"
                {...register("price", {
                  min: { value: 0, message: "Price cannot be negative" },
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => nav("/course")}
                type="button"
                className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition disabled:opacity-50 cursor-pointer"
              >
                {!existingData ? "add" : "Update Course"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
