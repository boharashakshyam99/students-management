import express from "express";
import Teacher from "../models/teacher.model.js";

export const createTeacher = async (req, res) => {
  try {
    const data = req.body;
    if (data.course === "null" || data.course === "") {
      data.course = null;
    }
    const teacher = await Teacher.create(data);
    res.status(200).json({
      success: true,
      message: "teacher created successfully",
      teacher,
    });
  } catch (error) {
    console.log(error);
    // res.status().json({ message: "error in creating teacher" });
  }
};

export const getTeachers = async (req, res) => {
  try {
    const teacher = await Teacher.find().populate("course");
    console.log("teacehr date", teacher);
    res.status(200).json({
      success: true,
      message: "teacher fetched successfully",
      teacher,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTeachersById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "sindgle Teacher fetched successfully",
      teacher,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Deleted teacher successfully",
      teacher,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, message: "Data updated", teacher });
  } catch (error) {
    console.log(error);
    console.log(error);
  }
};
