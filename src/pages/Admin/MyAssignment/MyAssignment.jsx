import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../../Context/AuthContext/AuthContext';
import MyAssTable from './MyAssTable';


const MyAssignment = () => {
     const {user} = use(AuthContext);
    const initailData = useLoaderData();

    // console.log(initailData);
    
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
                    <th>obtained marks</th>
                    <th>Feedback</th>
                </tr>
                </thead>
                <tbody>
                            {
                   initailData.filter(item => item.userEmail === user.email).map(item => <MyAssTable 
                    key={item._id} 
                    item={item}>
                    </MyAssTable>)
                }

                </tbody>
            
            </table>
            </div>
        </div>
    );
};

export default MyAssignment;