import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AssignmentCard from "./AssignmentCard";

const ViewAssignment = () => {
  const allAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(allAssignments);
  const [selectedLevel, setSelectedLevel] = useState("All");
  // console.log(assignments);

  return (
    <div className="">
      <div className="text-center">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="select select-bordered mb-4"
        >
          <option value="All">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {assignments
          .filter((assignment) =>
            selectedLevel === "All"
              ? true
              : assignment.difficulty === selectedLevel
          )
          .map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignments={assignments}
              setAssignments={setAssignments}
              assignment={assignment}
            />
          ))}
      </div>
    </div>
  );
};

export default ViewAssignment;
