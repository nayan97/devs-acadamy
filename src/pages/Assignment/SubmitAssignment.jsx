import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const SubmitAssignment = () => {
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
  } = useLoaderData();

  const handleSubmitAssignment = (e) => {
    e.preventDefault();

    if(user.email !== userEmail){
       const form = e.target;
    const formData = new FormData(form);
    const assignmentSubmitData = Object.fromEntries(formData.entries());
    console.log("Successfully uploaded:", assignmentSubmitData);

     fetch("http://localhost:3000/submitedaddassignment", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(assignmentSubmitData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("added");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Assignment has been submeted",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }else{
           Swal.fire({
              icon: "error",
              text: "You  can not submited your own created assignment",
            });
    }
   
  };

  return (
    <div>
      <form
        onSubmit={handleSubmitAssignment}
        className="bg-white p-8 rounded-2xl shadow-md w-full space-y-6"
      >
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-800">
              Submit Assignment
            </h2>
            <h2 className="text-2xl font-bold text-gray-800">
              Athor: <span className="text-amber-700">{userEmail}</span>{" "}
            </h2>
          </div>
          <div className="">
            <h3 className="font-bold bg-yellow-100 rounded-full p-2">
              Deadline:{" "}
              <span className="text-amber-700 text-xl">{deadline}</span>{" "}
            </h3>
          </div>
        </div>

        <div>
          <label
            htmlFor="title"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            readOnly
            type="text"
            id="title"
            name="title"
            defaultValue={title}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label
            htmlFor="Status"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <input
            readOnly
            type="text"
            id="Status"
            name="Status"
            defaultValue="Pending"
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
         <div>
          <label
            htmlFor="User"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            User
          </label>
                <input
          type="email"
          name="userEmail"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          defaultValue={user.email}
          readOnly
        />

        </div>
        <div>
          <label
            htmlFor="Docs"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Docs URL
          </label>
          <input
            type="url"
            id="Docs"
            name="Docs"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitAssignment;
