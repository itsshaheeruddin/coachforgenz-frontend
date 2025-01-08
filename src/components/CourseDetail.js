import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { courses } = useContext(AppContext);
  const { courseId } = useParams();

  // Ensure courses are loaded -- Loading State Check
  if (!courses || courses.length === 0) {
    return <div>Loading course details...</div>;
  }

  // Find the Selected Course
  const course = courses.find((course) => course._id === courseId);

  // Debugging Logs
  console.log("courses: " + courses[0]);
  console.log("courseId: " + courseId);
  console.log("course: "+course);

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center"></div>

          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-1 gap-x-16 gap-y-12">
            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <video controls className="w-full h-full">
                  <source src={course.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
                {" "}
                {course.title}{" "}
              </span>
              <p className="mt-4 text-gray-600">{course.description}</p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {" "}
                Uploaded By . {course.username}{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
