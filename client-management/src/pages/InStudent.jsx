import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  async function fetchStudent(studentId) {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/student/${studentId}`,
      );
      console.log(res.data.student);
      setStudent(res.data.student);
    } catch (error) {
      console.log(error);
    }
  }
  // async function fetchCourse() {
  //   try {
  //     const res = await axios.get("http://localhost:5000/api/course");

  //     console.log(res.data.course);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    fetchStudent(id);
  }, [id]);

  if (!student) {
    return <div className="p-10 text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="bg-white shadow-xl rounded-2xl w-[420px] p-8">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="student"
            className="w-24 h-24 rounded-full border-4 border-cyan-500"
          />
        </div>

        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold">{student.name}</h2>
          <p className="text-gray-500">{student.email}</p>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-3 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Student ID</span>
            <span>{student._id}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Course</span>
            <span>{student.course || "Not Assigned"}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Teacher</span>
            <span>{student.teacher || "Not Assigned"}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6"></div>
      </div>
    </div>
  );
};

export default InStudent;
