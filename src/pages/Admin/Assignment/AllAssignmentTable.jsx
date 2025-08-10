import React, { use } from "react";

import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const AllAssignmentTable = ({ assignment, assignments, setAssignments }) => {
  const { user } = use(AuthContext);
  const {
    _id,
    title,
    thumbnail,
    deadline,
    marks,
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
    });
  };

  // console.log(initailData);

  return (
    <>
      <tr>
        <td>{title}</td>
        <td  className="max-w-[60px]">{deadline}</td>
        <td>{marks}</td>
        <td>
          <img
            src={thumbnail}
            alt={title}
            className="max-w-[60px] h-15 object-fit"
          />
        </td>

        <td className="flex gap-1">
          {" "}
          <Link to={`/dashboard/ass_update/${_id}`}>
            <button className="btn btn-sm bg-green-600 text-white">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-error text-white"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllAssignmentTable;
