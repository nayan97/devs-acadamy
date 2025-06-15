import React, { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const PendingTable = ({ item }) => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const { _id, userEmail, title, Status, marks, obtainedMarks, feedback } =
    item;
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{Status}</td>
        <td>{marks}</td>

        <td>{userEmail}</td>
        <td>
          <button
            onClick={() => {
              if (userEmail !== user.email) {
                navigate(`/check_assignment/${_id}`);
              } else {
                Swal.fire({
                  icon: "warning",
                  title: "Not Allowed",
                  text: "You cannot check your own assignment.",
                });
              }
            }}
            className="btn bg-green-600 text-white join-item w-full"
          >
            Give Mark
          </button>
        </td>
      </tr>
    </>
  );
};

export default PendingTable;
