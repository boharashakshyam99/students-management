import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const InCourse = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  async function getCoursesById(courseId) {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/course/${courseId}`,
      );
      setCourseData(res.data.course);
      console.log(res.data.course);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getCoursesById(id);
    }
  }, [id]);

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600 animate-pulse">Loading course...</p>
      </div>
    );
  }

  // No Data UI
  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-500">No course found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Course Details
        </h1>

        {/* Course Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          {/* Course Image */}
          <div className="w-full h-64 bg-gray-200">
            <img
              src={
                courseData.image ||
                "https://via.placeholder.com/800x400?text=Course+Image"
              }
              alt={courseData.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {courseData.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {courseData.desc || "No description available for this course."}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Teacher */}
              <div className="bg-gray-50 p-4 rounded-xl border">
                <p className="text-sm text-gray-500 mb-1">Teacher</p>
                <p className="font-semibold text-gray-800">
                  {courseData.teacher || "Not assigned"}
                </p>
              </div>

              {/* Created Date */}
              <div className="bg-gray-50 p-4 rounded-xl border">
                <p className="text-sm text-gray-500 mb-1">Created At</p>
                <p className="font-semibold text-gray-800">
                  {courseData.updatedAt
                    ? new Date(courseData.updatedAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>

            {/* Price Section */}
            {courseData.price && (
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Course Price</p>
                  <p className="text-2xl font-bold text-green-600">
                    Rs. {courseData.price}
                  </p>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
                  Enroll Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InCourse;
