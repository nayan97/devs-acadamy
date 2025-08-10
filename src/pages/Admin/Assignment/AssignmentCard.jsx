import React from "react";
import { Link } from "react-router";


const AssignmentCard = ({ assignment }) => {

  const {
    _id,
    title,
    thumbnail,
    deadline,
    marks,
    difficulty,
  } = assignment;

  return (
    <div className="card w-100 bg-base-100 shadow-md min-w-[580px]">
      <div className="flex">
        <div className="card-body">
          <div className="flex items-start gap-4">
            <div>
                         <img
          src={thumbnail}
          alt={title}
          className="min-w-[400px] h-44 object-cover"
        />
              <h2 className="card-title text-2xl font-bold py-3">{title}</h2>
    
            </div>
          </div>

          <div className="flex gap-4 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <h1> Deadline: {deadline}</h1>
            </div>

            <div className="flex items-center gap-1">
              <h1>Marks: {marks}</h1>
            </div>
          </div>

          <div className="text-sm text-gray-500 mt-2">Level: {difficulty}</div>
        </div>
        <div className="join join-vertical p-6 space-y-2">
          <Link to={`/ass_details/${_id}`}>
            <button className="btn bg-green-600 text-white join-item w-full">
              Details
            </button>
          </Link>


    
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
