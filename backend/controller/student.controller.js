import Student from "../models/student.model.js";

export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in creating student" });
  }
};

export const getStudents = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || 6);
    const page = parseInt(req.query.page || 1);
    const skip = (page - 1) * 5;
    const totalblogs = await Student.countDocuments();
    const student = await Student.find().skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      message: "students fetched successfully",
      student,
      limit,
      currentPage: page,
      totalPage: Math.ceil(totalblogs / limit),
    });
  } catch (error) {
    console.log(error);
  }
};
export const getStudentsByID = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "single students data fetched successfully",
      student,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Deleted student successfully",
      student,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, message: "Data updated", student });
  } catch (error) {
    console.log(error);
  }
};
