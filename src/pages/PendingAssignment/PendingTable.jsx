import React from 'react';
import { Link } from "react-router";

const PendingTable = ({item}) => {
    const {_id, userEmail, title, Status, marks, obtainedMarks, feedback} = item;
    return (
        <>
                <tr>
      <td>{title}</td>
      <td>{Status}</td>
      <td>{marks}</td>
      <td>{userEmail}</td>
      <td>
        
          <Link to={`/ass_check/${_id}`}>
            <button className="btn btn-success text-white join-item w-full">
              Give Mark
            </button>
          </Link>
      </td>
    </tr>
        </>
    );
};

export default PendingTable;