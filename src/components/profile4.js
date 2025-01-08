import React, { useContext } from "react";
import background from "../components/images/pic5.png"; // Adjust the path to your uploaded image
import { useNavigate } from "react-router-dom"; 
import { AppContext } from "../context/AppContext";


const HeroSection = () => {

  const { user } = useContext(AppContext);

    const navigate = useNavigate();
    const handleNavigate = (type) => {
      // Route with query parameter for user type
      navigate(`/signin?userType=${type}`);
    };


  return (
    <div
      className="relative bg-black min-h-[80vh] flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          LET’S TRANSFORM <br />
          YOUR LIFE
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-12 justify-center items-center">
          <button
            onClick={() => handleNavigate("student")}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600"
          >
            Login as Student
          </button>
          <button
            onClick={() => handleNavigate("instructor")}
            className="px-6 py-3 bg-white text-pink-500 font-semibold rounded-lg hover:bg-gray-100"
          >
            Login as Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
