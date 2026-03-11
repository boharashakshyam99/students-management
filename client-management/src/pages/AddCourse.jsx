import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [teacherName, setTeacherName] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();
  const getTeacher = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/teacher");
      setTeacherName(res.data.teacher);
      console.log(res.data.teacher);
    } catch (error) {
      console.log(error);
    }
  };
  async function fetchTeachers() {
    try {
      const res = await axios.get("http://localhost:5000/api/teacher");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (data) => {
    try {
      if (!data.teacher) {
        data.teacher = null;
      }
      const res = await axios.post("http://localhost:5000/api/course", data);
      console.log(res);
      alert("course added Successfully");
      nav("/course");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeacher();
    fetchTeachers();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            {...register("desc", { required: "Description is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.desc && (
            <p className="text-red-500 text-sm">{errors.desc.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Image URL:</label>
          <input
            type="text"
            {...register("image", { required: "Image URL is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Course Code:</label>
          <input
            type="text"
            {...register("code", { required: "Course code is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.code && (
            <p className="text-red-500 text-sm">{errors.code.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Teacher (optional):</label>

          <select
            {...register("teacher")}
            className="w-full border px-3 py-2 rounded"
          >
            {/* <option value="">Select Teacher</option> */}
            <option value="">Select Teacher</option>

            {teacherName.map((prev) => (
              <>
                <option key={prev._id} value={prev.name}>
                  {prev.name}
                </option>
              </>
            ))}
            {/* <option value="2">Teacher 2</option>
            <option value="3">Teacher 3</option> */}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-1">Duration:</label>
          <input
            type="text"
            {...register("duration", { required: "Duration is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
