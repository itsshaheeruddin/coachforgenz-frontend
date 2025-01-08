import React, { useState, useContext, useEffect } from "react";
import background from "../components/images/pic5.png";
import CourseCardStud from "./CourseCardStud";
import Searchbar from "./Searchbar";
import { AppContext } from "../context/AppContext";

const HeroSection = () => {
  const { user, userType, courses } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search query change
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter courses based on the search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    !user && userType !== "student" && window.location.replace("/");
  }, [user, userType]);

  return (
    <>
      <div
        className="relative bg-black min-h-[30vh] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 px-6 sm:px-10">
          {user && (
            <h4 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight mb-10">
              Welcome {user.name}
            </h4>
          )}
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold text-white leading-tight">
            TOP COURSES FROM OUR TOP COACHES
          </h1>
        </div>
      </div>
      <Searchbar onSearch={handleSearch} />{" "}
      {/* Pass handleSearch to Searchbar */}
      <div className="space-y-6">
        <div className="space-y-4">
          {filteredCourses.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-600">
                No courses found.
              </h3>
            </div>
          ) : (
            filteredCourses.map((course, index) => (
              <CourseCardStud
                key={index}
                id={course._id}
                image={course.imageUrl}
                video={course.videoUrl}
                title={course.title}
                description={course.description}
                username={course.username}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
