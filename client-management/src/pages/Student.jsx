import React, { useEffect, useState } from "react";
import SideNav from "../component/SideNav";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Student = () => {
  const [studentData, setStudentData] = useState([]);
  const [input, setInput] = useState();
  const [page, setPage] = useState(1);
  console.log("this is page", page);
  const [totalPage, setTotalPage] = useState(1);

  const nav = useNavigate();

  const filteredData = studentData.filter((student) =>
    student.name?.toLowerCase().includes(input?.toLowerCase() || ""),
  );

  const getStudentData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/student", {
        params: {
          page: page,
          limit: 6,
        },
      });
      setStudentData(res.data.student);
      setTotalPage(res.data.totalPage);
      console.log("total page", res.data.totalPage);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/student/${id}`);
      console.log("delete successfully", res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <SideNav />

      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-1 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Home</span>
              <span> / </span>
              <span className="font-medium text-gray-900">Students</span>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Students</h1>
                <p className="text-gray-500">
                  Manage enrollments and student profiles
                </p>
              </div>

              <NavLink to="/addStudent">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg cursor-pointer">
                  + Enroll Student
                </button>
              </NavLink>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white border rounded-xl p-4 mb-6 shadow-sm">
            <div className="flex justify-between items-center">
              <input
                value={input}
                type="text"
                placeholder="Search student..."
                className="border rounded-lg px-4 py-2 w-72 outline-none focus:ring-2 focus:ring-cyan-500"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>

          {/* Student Cards */}
          <div className="grid grid-cols-4 gap-6">
            {filteredData.map((student) => (
              <div
                key={student._id}
                className="w-72 bg-white rounded-xl shadow-md p-5"
              >
                {" "}
                <NavLink to={`/instudent/${student._id}`}>
                  <>
                    <div className="flex justify-center">
                      <img
                        src={
                          student.image ||
                          "https://imgs.search.brave.com/xMcjmecTqKQlEOsVZe_95bLcMewt5aGFRsgA-_ggCYg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzcwLzU5LzAw/LzM2MF9GXzEzNzA1/OTAwNzNfR2ZmNEU4/VEh6dzE5UnFMVVA3/cU1odFEzbE5Ra0hi/TEkuanBn"
                        }
                        alt="student"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>

                    <div className="text-center mt-4">
                      <h2 className="text-lg font-semibold">{student.name}</h2>
                      <p className="text-gray-500 text-sm">{student.email}</p>
                    </div>

                    <div className="mt-4 space-y-1 text-sm text-gray-600">
                      <p>
                        <strong>Course:</strong>{" "}
                        {student.course ? student.course : "Not Assigned"}
                      </p>

                      <p>
                        <strong>Teacher:</strong>{" "}
                        {student.teacher ? student.teacher : "Not Assigned"}
                      </p>
                    </div>
                  </>
                </NavLink>
                <button
                  className="bg-green-400 border rounded-lg pl-3 pr-3 m-2 cursor-pointer"
                  onClick={() => nav(`/addStudent/${student._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-400 border rounded-lg pl-3 pr-3 m-2 cursor-pointer"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
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
        </div>
      </main>
    </div>
  );
};

export default Student;
