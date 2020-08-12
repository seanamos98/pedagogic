const router = require("express").Router();
let Course = require("../models/course.model");
const verify = require("../verifyToken");

router.route("/", verify).get((req, res) => {
  res.send(req.user); // from verifyToken
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const instructor = req.body.instructor;
  const description = req.body.description;
  const published = req.body.published;

  const newCourse = new Course({
    title,
    instructor,
    description,
    published,
  });

  newCourse
    .save()
    .then(() => res.json("Course added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Course.findById(req.params.id)
    .then((course) => res.json(course))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.json("Course deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Course.findById(req.params.id)
    .then((course) => {
      course.title = req.body.title;
      course.instructor = req.body.instructor;
      course.description = req.body.description;
      course.published = req.body.published;

      course
        .save()
        .then(() => res.json("Course updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
