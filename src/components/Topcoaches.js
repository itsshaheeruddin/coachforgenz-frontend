import React from "react";
import background from "../components/images/pic5.png"; // Adjust the path to your uploaded image

const HeroSection = () => {
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
          PAGE YET TO BE<br />
          DEVELOPED
        </h1>
     
      </div>
    </div>
  );
};

export default HeroSection;
