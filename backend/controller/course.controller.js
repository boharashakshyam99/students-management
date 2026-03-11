import Course from "../models/course.model.js";

export const createCourse = async (req, res) => {
  try {
    console.log(req.body);
    const course = await Course.create(req.body);
    res.status(200).json({
      success: true,
      message: "course created successfully",
      course,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCourse = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || 6);
    const page = parseInt(req.query.page || 1);
    const skip = (page - 1) * 5;
    const totalblogs = await Course.countDocuments();
    console.log(totalblogs);
    const course = await Course.find().skip(skip).limit(limit);
    console.log(course);
    res.status(200).json({
      success: true,
      message: "course fetched successfully",
      course,
      currentpage: page,
      limit,
      totalpage: Math.ceil(totalblogs / limit),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "course deleted successfully",
      course,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCourseById = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findById(id);
    res.status(200).json({
      success: true,
      message: "single course fetched",
      course,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "course updated Successfully",
      course,
    });
  } catch (error) {
    console.log(error);
  }
};
