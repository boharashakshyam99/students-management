import express from "express";
import {
  createStudent,
  deleteStudent,
  getStudents,
  getStudentsByID,
  updateStudent,
} from "../controller/student.controller.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudentsByID);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
