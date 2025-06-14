import React from 'react';

const MyAssTable = ({item}) => {
    const {_id, title, Status, marks, obtainedMarks, feedback} = item;
    return (
        <>
    <tr>
      <td>{title}</td>
      <td>{Status}</td>
      <td>{marks}</td>
      <td>{obtainedMarks}</td>
      <td>{feedback}</td>
    </tr>
        </>
    );
};

export default MyAssTable;