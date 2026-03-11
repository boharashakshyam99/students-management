import express from "express";
import {
  createTeacher,
  deleteTeacher,
  getTeachers,
  getTeachersById,
  updateTeacher,
} from "../controller/teacher.controller.js";

const router = express.Router();

router.get("/", getTeachers);
router.post("/", createTeacher);
router.get("/:id", getTeachersById);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);


export default router