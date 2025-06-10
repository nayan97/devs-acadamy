import React from 'react';
import { Link } from 'react-router';

const AssignmentCard = ({assignment}) => {
    const {_id, title, category, deadline, budget} = assignment;
    return (
     <div className="card w-100 bg-base-100 shadow-md min-w-[580px]">
                  
                <div className="card-body">

                    <div className="flex items-start gap-4">
     
                    <div>
                        <h2 className="card-title text-base font-semibold">
                        {title}
                        </h2>
                        <p className="text-sm text-primary hover:underline cursor-pointer">
                        {category}
                        </p>
                    </div>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                        <h1> Deadline: {
                            deadline}</h1>
                    </div>

                    <div className="flex items-center gap-1">
                        <h1>
                            Budget: { budget}$</h1>
                    </div>
                    </div>

                    <div className="text-sm text-gray-500 mt-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132a1.5 1.5 0 00-2.302 1.264v4.4a1.5 1.5 0 002.302 1.264l3.197-2.132a1.5 1.5 0 000-2.664z"
                        />
                    </svg>
                    3 Proposals
                    </div>
                    <div className="join join-vertical">
                        <Link to={`/assignments/${_id}`}>
                          <button className="btn btn-success text-white join-item w-full">Assignment Details</button></Link>
                      
                    </div>
                </div>
            </div>  
    );
};

export default AssignmentCard;