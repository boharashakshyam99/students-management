import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const InTeacher = () => {
  const [teacherData, setTeacherData] = useState([]);
  const { id } = useParams();
  console.log(id);
  async function fetchTeacherById() {
    try {
      const res = await axios.get(`http://localhost:5000/api/teacher/${id}`);
      console.log(res.data.teacher);
      setTeacherData(res.data.teacher);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchTeacherById();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
        <img
          src={teacherData.image}
          alt={teacherData.name}
          className="w-28 h-28 rounded-full mx-auto object-cover border"
        />

        <h2 className="text-2xl font-semibold mt-4">{teacherData.name}</h2>

        <p className="text-gray-600 mt-2">{teacherData.email}</p>
        <p className="text-gray-600">{teacherData.phone}</p>

        <p className="mt-3 text-sm text-gray-500">
          Specializaton: {teacherData.specialization}
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Subject: {teacherData.course}
        </p>
      </div>
    </div>
  );
};

export default InTeacher;
