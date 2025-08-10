import React from "react";
import { Link } from "react-router";

const AssignmentCard = ({ assignment }) => {
  const { _id, title, thumbnail, deadline, marks, difficulty } = assignment;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Thumbnail */}
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover p-4" />

      {/* Body */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold">{title}</h2>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
          <div className="flex items-center gap-1">
            <span className="font-medium">Deadline:</span> {deadline}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Marks:</span> {marks}
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-2">
          <span className="font-medium">Level:</span> {difficulty}
        </div>

        {/* Button fixed to bottom */}
        <div className="mt-auto pt-4 mb-3">
          <Link to={`/ass_details/${_id}`}>
            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
