import React from "react";
import coach from "../components/images/pic4.png";

const CoachProfile = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-12 md:px-20 lg:px-32">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:flex-1 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-4xl md:text-5xl mt-12 font-extrabold text-black">
            KHKULA <br />GUL
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-rose-500 mt-4">
            Fitness Coach
          </p>
          <p className="text-base sm:text-lg lg:text-sm text-gray-600 mt-6 leading-relaxed text-justify">
            As a Fitness Coach, I specialize in empowering individuals to
            achieve their health and fitness goals through personalized coaching
            and sustainable strategies. My approach combines fitness training
            with holistic wellness practices to help clients build strength,
            improve endurance, and maintain a balanced lifestyle.
            <br />
            <br />
            With years of experience in fitness coaching, I have worked with
            individuals at all levels, guiding them through fitness challenges
            and helping them unlock their physical potential. Whether you're
            looking to lose weight, build muscle, or improve overall health, I
            provide the tools, motivation, and expertise needed to achieve lasting
            results.
            <br />
            <br />
            Fitness is more than just physical training; it’s about creating a
            mindset of discipline, resilience, and confidence. I help my clients
            overcome limiting beliefs, stay motivated, and cultivate the habits
            necessary to lead a healthy, active life.
          </p>
        </div>

        {/* Image Section */}
        <div className="ml-10 lg:mt-0 lg:flex-1 flex justify-center relative order-1 lg:order-2">
          <img
            src={coach} // Replace with your image path
            alt="Coach"
            className="w-72 sm:w-80 md:w-96 lg:w-[34rem] object-cover z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
