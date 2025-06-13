import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AssDetail = () => {
      const assignment = useLoaderData();

  const {
    _id,
    title,
    description,
    marks,
    thumbnail,
    difficulty,
    deadline,
    userEmail,
  } = assignment;
return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="px-3 py-1 bg-blue-100 rounded-full">
              Marks: <strong>{marks}</strong>
            </span>
            <span className="px-3 py-1 bg-green-100 rounded-full">
              Difficulty: <strong className="capitalize">{difficulty}</strong>
            </span>
            <span className="px-3 py-1 bg-yellow-100 rounded-full">
              Deadline: <strong>{new Date(deadline).toLocaleDateString()}</strong>
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">
              Creator: <strong>{userEmail}</strong>
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">{description}</p>

         <Link to={`/submit_assignment/${_id}`}>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200">
            Submit Assignment
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default AssDetail;