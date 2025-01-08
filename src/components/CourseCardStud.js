import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({id, image, video, title, description, username }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/courses/${id}`);
  };
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mx-auto my-4 w-full lg:w-10/12"
      onClick={() => {
        handleNavigation();
      }}
      style={{'cursor': "pointer"}}
    >
      {/* Course Image and Details */}
      <div className="flex flex-col lg:flex-row items-center space-x-4 lg:space-x-4">
        <img
          src={image}
          alt={title}
          className="w-48 h-48 object-cover rounded-lg" // Enlarged image size
        />
        <div className="mt-2 lg:mt-0">
          <h3 className="text-xl font-semibold text-pink-500">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
          {/* Display Username */}
          <p className="mt-2 text-sm text-gray-500">Uploaded by: {username}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
