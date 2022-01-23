const mongoose = require("mongoose");
const grades = mongoose.model(
    "Grade",
    new mongoose.Schema({
        student_id: {
            type: String,
            required: true
        },
        grade: {
            type: Number,
            required: true
        }
    })
);
module.exports = grades;
