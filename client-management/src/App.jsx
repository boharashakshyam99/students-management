import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SideNav from "./component/SideNav";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import AddCourse from "./pages/AddCourse";
import InCourse from "./pages/InCourse";
import EditCourse from "./pages/EditCourse";
import AddTeacher from "./pages/AddTeacher";
import InTeacher from "./pages/InTeacher";
import NotFound from "./component/ErrorPage";
import AddStudent from "./pages/AddStudent";
import InStudent from "./pages/InStudent";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/sideNav" element={<SideNav />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/course" element={<Course />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/addCourse" element={<AddCourse />} />
        <Route path="/course/:id" element={<InCourse />} />
        <Route path="/course/edit/:id" element={<EditCourse />} />
        <Route path="/addTeacher" element={<AddTeacher />} />
        <Route path="/addTeacher/:id" element={<AddTeacher />} />
        <Route path="/teacher/:id" element={<InTeacher />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/addStudent/:id" element={<AddStudent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/inStudent/:id" element={<InStudent />} />
      </Routes>
    </>
  );
}

export default App;
