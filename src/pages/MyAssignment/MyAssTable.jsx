import React from 'react';

const MyAssTable = ({item}) => {
    const {_id, title, Status, marks, marksGiven, feedback} = item;
    return (
        <>
    <tr>
      <td>{title}</td>
      <td>{Status}</td>
      <td>{marks}</td>
      <td>{marksGiven}</td>
      <td>{feedback}</td>
    </tr>
        </>
    );
};

export default MyAssTable;