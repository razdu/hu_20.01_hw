const mongoose = require("mongoose");
const student = mongoose.model(
    "Student",
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        grade: {
            type: Number,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    })
);
module.exports = student;
