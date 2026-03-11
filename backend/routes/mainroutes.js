import express from "express";
import courseRoute from "./coursesRoutes.js";
import studentRoutes from "./studentRoute.js";
import teacherRoute from "./teacherRoutes.js";
const router = express.Router();

router.use("/course", courseRoute);
router.use("/student", studentRoutes);
router.use("/teacher", teacherRoute);

export default router;
