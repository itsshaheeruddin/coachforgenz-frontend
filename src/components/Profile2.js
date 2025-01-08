import React from "react";
import coach from "../components/images/pic3.png";

const CoachProfile = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-12 md:px-20 lg:px-32">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Image Section */}
        <div className="mt-10 lg:mt-0 lg:flex-1 flex justify-center relative">
          <img
            src={coach} // Replace with your image path
            alt="Coach"
            className="w-72 sm:w-80 md:w-96 lg:w-[34rem] object-cover z-10"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:flex-1">
          <h2 className="text-2xl sm:text-4xl md:text-5xl mt-12 font-extrabold text-black">
            EISHA <br />SHAH
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-rose-500 mt-4">
            Financial Coach
          </p>
          <p className="text-base sm:text-lg lg:text-sm text-gray-600 mt-6 leading-relaxed text-justify">
          As a Financial Coach, I specialize in helping individuals and businesses gain clarity, control, and confidence in their financial decisions. My approach combines personalized coaching with proven strategies to help clients build wealth, manage their finances, and achieve financial independence.

With years of experience in financial planning, investment strategies, and personal finance, I have worked with clients across various industries, guiding them through financial challenges and helping them take charge of their financial future. Whether you are looking to save for a major life goal, optimize your investment portfolio, or plan for retirement, I provide the support and tools needed to reach your financial objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
