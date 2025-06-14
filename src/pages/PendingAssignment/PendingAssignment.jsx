import React from 'react';
import { useLoaderData } from 'react-router';
import PendingTable from './PendingTable';

const PendingAssignment = () => {
    const pendingData = useLoaderData();
    return (

     <div>
       <div className="overflow-x-auto min-h-[650px] pt-6 border border-amber-100">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Marks</th>
                    <th>Student Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                            {
                   pendingData.filter(item => item.Status === 'Pending').map(item => <PendingTable 
                    key={item._id} 
                    item={item}>
                    </PendingTable>)
                }

                </tbody>
            
            </table>
            </div>
        </div>

     
    );
};

export default PendingAssignment;