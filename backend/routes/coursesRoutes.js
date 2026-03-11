import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourse,
  getCourseById,
  updateCourse,
} from "../controller/course.controller.js";

const router = express.Router();

router.post("/", createCourse);
router.get("/get", getCourse);
router.get("/:id", getCourseById);
router.delete("/:id", deleteCourse);
router.put("/:id", updateCourse);

export default router;
