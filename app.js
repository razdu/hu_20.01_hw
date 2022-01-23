const mongoose = require("mongoose"),
    express = require("express"),
    fs = require("fs-extra");
const app = express();

const Student = require("./models/students");
const Grade = require("./models/grades");
const student = require("./models/students");

const port = 8000;
const uri = "mongodb://localhost:27017/hu-hw";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    next();
});

app.post("/addStudent", (req, res) => {
    const student = new Student(req.body);
    student.save((err, student) => {
        res.json(res.statusCode);
    });
});
app.post("/addGrade", (req, res) => {
    console.log("student to add");
});
app.get("/getStudentsByName", (req, res) => {
    console.log("student by name");
    console.log(req.query);
    Student.find({ name: req.body }, (err, student) => {
        res.json(student);
    });
});
app.get("/getAllStudents", (req, res) => {
    console.log("all students");
    Student.find({}, (err, students) => {
        console.log(students);
        res.send(students);
    });
});
app.delete("/deleteStudentByName", (req, res) => {
    console.log("delete students by name");
});
app.delete("/deleteStudentById", (req, res) => {
    console.log("delete students by ID");
});

mongoose.connect(uri).then(
    app.listen(port, () => {
        console.log(`server is up at http://localhost:${port}`);
    })
);
