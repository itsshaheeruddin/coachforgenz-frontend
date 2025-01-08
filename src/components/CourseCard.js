import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline'; // Import from Heroicons v2

const CourseCard = ({ image, title, description, handleDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Course Image and Details */}
      <div className="flex flex-col lg:flex-row items-center space-x-4 lg:space-x-4">
        <img src={image} alt={title} className="w-32 h-32 object-cover rounded-lg" />
        <div className="mt-2 lg:mt-0">
          <h3 className="text-xl font-semibold text-pink-500">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>

      {/* Icons for Edit and Delete */}
      <div className="flex space-x-4 mt-4 lg:mt-0">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-600 focus:outline-none"
          aria-label="Delete Course"
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
