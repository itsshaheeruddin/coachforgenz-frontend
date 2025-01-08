import React from "react";
import coach from "../components/images/pic2.png";

const CoachProfile = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-12 md:px-20 lg:px-32">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 id="top-coaches" className="text-3xl sm:text-4xl md:text-5xl mb-20 font-extrabold text-black">
          MEET OUR TOP <br />COACHES
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:flex-1 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-4xl md:text-5xl mt-12 font-extrabold text-black">
            SHAHEER <br />UD DIN
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-rose-500 mt-4">
            Leadership Coach
          </p>
          <p className="text-base sm:text-lg lg:text-sm text-gray-600 mt-6 leading-relaxed text-justify">
            As a Leadership Coach, I specialize in empowering individuals and
            organizations to unlock their full potential. My approach combines
            personalized coaching with proven strategies to help leaders build
            stronger teams, enhance decision-making, and develop a clear vision
            for growth.
            <br />
            <br />
            With years of experience in leadership development, I have worked
            with professionals across various industries, guiding them through
            challenges and opportunities. Whether you are looking to refine your
            leadership skills, increase your influence, or navigate a career
            transition, I provide the support and tools needed to achieve success.
            <br />
            <br />
            Leadership is about more than just managing people; it’s about
            inspiring and motivating others to achieve collective goals. I help my
            clients understand their strengths, overcome limiting beliefs, and
            cultivate the mindset required to lead with confidence and purpose.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 lg:flex-1 flex justify-center relative order-1 lg:order-2">
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
