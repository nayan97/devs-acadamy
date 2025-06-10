import React from 'react';
import { useLoaderData } from 'react-router';
import AssignmentCard from './AssignmentCard';

const ViewAssignment = () => {
    const assignments = useLoaderData();
    // console.log(assignments);
    
  
    return (

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                {
                    assignments.map(assignment => <AssignmentCard key={assignment._id}  assignment={assignment}></AssignmentCard>)
                }
        </div>

     
    );
};

export default ViewAssignment;