import React from "react";
import { use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
  const { user } = use(AuthContext);
  const { _id, title, category, deadline, budget, userEmail } = assignment;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      //   console.log(result.isConfirmed);
      // console.log(user.email);

      if (user.email == userEmail) {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/assignment/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              if (data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Assignment has been deleted.",
                  icon: "success",
                });
                // remove the tasks from state
                    const remainingAssignments = assignments.filter(ass => ass._id !== _id);
                    setAssignments(remainingAssignments);
              }
            });
        }
      } else {

        // proteted other user data
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Access Denied",
          footer: '<p >You can not delete other user information </p>',
        });
      }
    });
  };
  return (
    <div className="card w-100 bg-base-100 shadow-md min-w-[580px]">
      <div className="flex">
        <div className="card-body">
          <div className="flex items-start gap-4">
            <div>
              <h2 className="card-title text-base font-semibold">{title}</h2>
              <p className="text-sm text-primary hover:underline cursor-pointer">
                {category}
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <h1> Deadline: {deadline}</h1>
            </div>

            <div className="flex items-center gap-1">
              <h1>Budget: {budget}$</h1>
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
        </div>
        <div className="join join-vertical p-6 space-y-2">
          <Link to={`/ass_details/${_id}`}>
            <button className="btn btn-success text-white join-item w-full">
              Details
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error text-white join-item w-full"
          >
            Delete
          </button>

          <Link to={`/ass_update/${_id}`}>
            <button className="btn btn-success text-white join-item w-full">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
