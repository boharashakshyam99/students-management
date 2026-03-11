import React, { useEffect, useState } from "react";
import SideNav from "../component/SideNav";
import { Plus, Search, Filter, ArrowDownWideNarrow } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(1);

  const filteredData = courses.filter((course) => {
    return course.title?.toLowerCase().includes(input.toLowerCase());
  });
  async function getCourses() {
    try {
      const res = await axios.get("http://localhost:5000/api/course/get", {
        params: {
          page: page,
          limit: 5,
        },
      });
      setCourses(res.data.course);
      setTotalpage(res.data.totalpage);
      console.log(res.data.course);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCourse(id) {
    try {
      const res = await axios.delete(`http://localhost:5000/api/course/${id}`);
      setCourses((prev) => prev.filter((course) => course._id !== id));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // async function updateCourse(id) {
  //   try {
  //     const res = await axios.put(`http://localhost:5000/api/course/${id}`);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function getEXistingCourse(id) {
    try {
      const res = await axios.get(`http://localhost:5000/api/course/${id}`);
      console.log("existing data", res.data.teacher);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getEXistingCourse();
    getCourses();
  }, [page]);

  return (
    <div className="flex min-h-screen bg-gray-50 text-black">
      <SideNav />
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-gray-200 px-6 py-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold">Course Directory</h2>
              <p className="text-sm text-gray-500 mt-1">
                Manage and oversee all curriculum courses, schedules, and
                enrollments.
              </p>
            </div>
            <NavLink to="/addCourse">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition cursor-pointer">
                <Plus className="w-5 h-5" />
                New Course
              </button>
            </NavLink>
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center p-4 gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-600 text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              <Filter className="w-5 h-5" /> Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              <ArrowDownWideNarrow className="w-5 h-5" /> Sort
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {filteredData.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <NavLink to={course._id}>
                <img
                  src={course.image || "https://via.placeholder.com/400x200"}
                  alt={course.name}
                  className="w-full h-40 object-cover"
                />
              </NavLink>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-2 truncate w-20">
                  {course.desc}
                </p>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>
                    {course.teacher
                      ? `${course.teacher}`
                      : "no teacher assigned"}

                    {course.teachers > 1 ? "s" : ""}
                  </span>
                  <span>
                    {course.students}10 Student{course.students > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex justify-between m-3">
                  <Link to={`/course/edit/${course._id}`}>
                    <button className="bg-green-400 pl-3 pr-3 rounded-lg p-1 text-white cursor-pointer">
                      Edit
                    </button>
                  </Link>
                  <div>
                    <button
                      className="bg-red-400 pl-3 pr-3 rounded-lg p-1 text-white cursor-pointer"
                      onClick={() => deleteCourse(course._id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            className="border p-2"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <h1>
            {page} of {totalpage}
          </h1>
          <button
            className="border p-2"
            disabled={page === totalpage}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Course;
