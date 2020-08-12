import React, { useState, useEffect } from "react";
import CourseDataService from "../services/CourseService";
import { Link } from "react-router-dom";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveCourses();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveCourses = () => {
    CourseDataService.getAll()
      .then((response) => {
        setCourses(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveCourses();
    setCurrentCourse(null);
    setCurrentIndex(-1);
  };

  const setActiveCourse = (course, index) => {
    setCurrentCourse(course);
    setCurrentIndex(index);
  };

  const removeAllCourses = () => {
    CourseDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    CourseDataService.findByTitle(searchTitle)
      .then((response) => {
        setCourses(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Courses List</h4>

        <ul className="list-group">
          {courses &&
            courses.map((course, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveCourse(course, index)}
                key={index}
              >
                {course.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllCourses}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentCourse ? (
          <div>
            <h4>Course</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentCourse.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentCourse.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentCourse.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/courses/" + currentCourse.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Course...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesList;
