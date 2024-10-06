const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  Mobileno: {
    type: String,
    required: true,
  },
  Year: {
    type: String,
    required: true,
  },
  Semester: {
    type: String,
    required: true,
  },
  Memberofclub: {
    type: String,
    required: true,
  },

  Memberofotheractivities: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student; // Export the model
