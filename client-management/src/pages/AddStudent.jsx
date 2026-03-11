import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const AddStudent = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [existingData, setExistingData] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [teacherData, setTeacherData] = useState([]);
  const [courseData, setCourseData] = useState([]);

  async function existingStudentData(studentId) {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/student/${studentId}`,
      );
      console.log(res.data.student);
      reset(res.data.student);
      setExistingData(res.data.student);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (data) => {
    try {
      if (id) {
        // Update existing student
        await axios.put(`http://localhost:5000/api/student/${id}`, data);
        console.log("Student updated");
      } else {
        // Add new student
        await axios.post("http://localhost:5000/api/student", data);
        console.log("Student added");
      }
      nav("/student"); 
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTeacher = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/teacher");
      setTeacherData(res.data.teacher);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCourse = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/course");
      setCourseData(res.data.course);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeacher();
    fetchCourse();
    existingStudentData(id);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Student</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            {}
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter student name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              {...register("phone")}
              placeholder="Enter phone number"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              {...register("address")}
              placeholder="Enter address"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Course */}
          {/* <div> */}
          {/* <label className="block text-sm font-medium mb-1">Course</label>
            <input
              type="text"
              {...register("course")}
              placeholder="Enter course"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div> */}

          {/* Shift */}
          <div>
            <label className="block text-sm font-medium mb-1">Shift</label>
            <select
              {...register("shift")}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select Shift</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Weekend">Weekend</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              {...register("image")}
              placeholder="Enter image URL"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Course</label>
            <select
              {...register("course")}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select Course</option>
              {courseData.map((prev) => (
                <>
                  <option key={prev._id} value={prev.title}>
                    {prev.title}
                  </option>
                </>
              ))}{" "}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Teacher</label>
            <select
              {...register("teacher")}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Select Teacher</option>
              {teacherData.map((prev) => (
                <>
                  {" "}
                  <option key={prev._id} value={prev.name}>
                    {prev.name}
                  </option>
                </>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
