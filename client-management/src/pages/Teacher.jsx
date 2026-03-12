import React from "react";
import SideNav from "../component/SideNav";
import { Plus, Search } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [input, setInput] = useState("");
  // const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(1);
  const nav = useNavigate();

  const filteredData = teachers.filter((teacher) => {
    return teacher.name.toLowerCase().includes(input.toLowerCase());
  });
  async function deleteTeacher(id) {
    alert("are you sure");
    try {
      const res = await axios.delete(`http://localhost:5000/api/teacher/${id}`);
      setTeachers((prev) => prev.filter((teacher) => teacher._id !== id));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  // async function updateTeacher(params) {

  // }
  async function fetchTeacher() {
    try {
      const res = await axios.get("http://localhost:5000/api/teacher", {
        // params: {
        //   page: page,
        //   limit: 6,
        // },
      });
      setTeachers(res.data.teacher);
      // setTotalPage(res.data.totalPage);
      console.log("response", res.data.teacher);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTeacher();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideNav />

      {/* Main content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <nav className="flex text-sm font-medium text-gray-500">
                <a className="hover:text-primary transition-colors" href="#">
                  Home
                </a>
                <span className="mx-2 text-gray-300">/</span>
                <span className="text-gray-900">Teachers</span>
              </nav>
              <div className="flex items-center gap-3 md:hidden">
                <button className="text-gray-500 hover:text-gray-900">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Teacher Directory
                </h1>
                <p className="text-gray-500 mt-1">
                  Manage, add, and organize teaching staff.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search />
                  </span>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Search by name or ID..."
                    className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64 transition-all"
                  />
                </div>
                <NavLink to="/addTeacher">
                  <button className="bg-primary hover:bg-primary-dark text-black font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 shadow-sm shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">
                      <Plus />
                    </span>
                    Add Teacher
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="flex items-center gap-8 border-b border-gray-100 pt-2 overflow-x-auto no-scrollbar">
              <button className="pb-3 border-b-2 border-primary text-gray-900 font-semibold text-sm whitespace-nowrap">
                All Teachers
                <span className="ml-2 bg-primary/10 text-primary-dark text-xs py-0.5 px-2 rounded-full">
                  24
                </span>
              </button>
              <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium text-sm whitespace-nowrap transition-colors">
                Mathematics Dept
              </button>
              <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium text-sm whitespace-nowrap transition-colors">
                Science Dept
              </button>
              <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium text-sm whitespace-nowrap transition-colors">
                English Dept
              </button>
              <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium text-sm whitespace-nowrap transition-colors">
                History Dept
              </button>
            </div>
          </div>
        </header>

        {/* Teacher Cards */}
        <div className="max-w-7xl mx-auto p-6 cursor-pointer">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Example Teacher Card */}
            {filteredData.map((teacher) => (
              <div
                key={teacher._id}
                className="group bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  <NavLink to={`/teacher/${teacher._id}`}>
                    <div className="relative mb-4">
                      <div className="h-20 w-20 rounded-full bg-primary-light flex items-center justify-center text-primary-dark text-2xl font-bold border-2 border-white shadow-sm overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={teacher.image}
                          alt="Teacher Portrait"
                        />
                      </div>

                      <div
                        className="absolute bottom-0 right-0 h-5 w-5 bg-green-500 border-2 border-white rounded-full"
                        title="Active"
                      />
                    </div>

                    <h3 className="text-gray-900 font-bold text-lg">
                      {teacher.name}
                    </h3>

                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mt-1 mb-4 border border-blue-100">
                      {teacher.specialization}
                    </span>

                    <div className="w-full space-y-2 mb-5">
                      <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-gray-400 text-[18px]">
                          mail
                        </span>
                        <span className="truncate">{teacher.email}</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-gray-400 text-[18px]">
                          call
                        </span>
                        <span>{teacher.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-gray-400 text-[18px]">
                          course
                        </span>
                        <span>
                          {teacher.course
                            ? `${teacher.course}`
                            : "no course assigned"}
                        </span>
                      </div>
                    </div>
                  </NavLink>
                  <div className="">
                    <button
                      className="bg-green-400 border rounded-lg pl-3 pr-3 m-2 cursor-pointer"
                      onClick={() => nav(`/addTeacher/${teacher._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-400 border rounded-lg pl-3 pr-3 m-2 cursor-pointer"
                      onClick={() => deleteTeacher(teacher._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Add more teacher cards here */}
          </div>

          {/* Pagination */}
          {/* <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium text-gray-900">1</span> to{" "}
              <span className="font-medium text-gray-900">6</span> of{" "}
              <span className="font-medium text-gray-900">24</span> results
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Previous
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
          </div> */}
        </div>
        {/* <div className="flex justify-center items-center">
          <button
            className="p-2 rounded border"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            prev
          </button>
          <h1>
            {page}of{totalPage}
          </h1>
          <button
            className="p-2 rounded border"
            disabled={page === totalPage}
            onClick={() => setPage(page + 1)}
          >
            next
          </button>
        </div> */}
      </main>
    </div>
  );
};

export default Teacher;
