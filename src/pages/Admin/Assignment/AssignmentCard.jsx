import React from "react";
import { use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
  const { user } = use(AuthContext);
  const {
    _id,
    title,
    thumbnail,
    deadline,
    userEmail,
    description,
    marks,
    difficulty,
  } = assignment;

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
          fetch(`https://b11-a11-server-rho.vercel.app/assignment/${_id}`, {
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
                const remainingAssignments = assignments.filter(
                  (ass) => ass._id !== _id
                );
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
          footer: "<p >You can not delete other user information </p>",
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

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error text-white join-item w-full"
          >
            Delete
          </button>

          <Link to={`/ass_update/${_id}`}>
            <button className="btn bg-green-600 text-white join-item w-full">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
