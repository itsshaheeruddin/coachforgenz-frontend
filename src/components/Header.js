import React, { useContext } from "react";
import pic from "./images/mainpic.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { setUserType, user } = useContext(AppContext);

  const handleNavigate = (type) => {
    setUserType(type);
    navigate(`/signin`);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Main Section */}
      <main className="flex flex-col sm:flex-row flex-grow items-center justify-between px-4 sm:px-10 py-6 sm:py-12">
        {/* Left Section: Text and Buttons */}
        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-black leading-tight">
            WE
            <br /> CHANGE <br />
            LIVES!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 sm:mt-6">
            We change the lives of teenage people by offering them coaching and
            mentoring from top experts in every industry.
          </p>

          {!user && (
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mt-6 sm:mt-8">
              <button
                onClick={() => handleNavigate("student")}
                className="bg-pink-500 text-white rounded-lg px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold shadow-md hover:bg-pink-600 transition-colors duration-300"
              >
                login as Student
              </button>
              <button
                onClick={() => handleNavigate("instructor")}
                className="bg-white text-pink-500 rounded-lg px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold shadow-md hover:bg-pink-100 transition-colors duration-300 mt-4 sm:mt-0 sm:ml-4"
              >
                Login as Instructor
              </button>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="relative w-full sm:w-1/2 flex justify-center items-center mt-8 sm:mt-0">
          <img
            src={pic}
            alt="Main Display"
            className="relative z-10 w-2/3 sm:w-3/4 h-auto object-cover mt-4 sm:mt-0"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;