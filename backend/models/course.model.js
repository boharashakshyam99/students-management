import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      requried: true,
    },
    code: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
