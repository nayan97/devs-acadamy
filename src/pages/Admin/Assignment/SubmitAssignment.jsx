import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
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

    if (user.email !== userEmail) {
      const form = e.target;
      const formData = new FormData(form);
      const assignmentSubmitData = Object.fromEntries(formData.entries());
      // console.log("Successfully uploaded:", assignmentSubmitData);

fetch("https://b11-a11-server-rho.vercel.app/submitedaddassignment", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(assignmentSubmitData),
})
  .then(async (res) => {
    const data = await res.json();

    if (!res.ok) {

      // Show backend message if submission already exists
      
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: data.message || "Something went wrong!",
      });
      throw new Error(data.message || "Submission failed");
    }

    if (data.insertedId) {
      console.log("added");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Assignment has been submitted",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  })
  .catch((error) => {
    console.error("Submit error:", error.message);
  });

    } else {
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
              Author: <span className="text-amber-700">{userEmail}</span>
            </h2>
          </div>
          <div className="">
            <h3 className="font-bold bg-yellow-100 rounded-full p-2">
              Deadline:{" "}
              <span className="text-amber-700 text-xl">{deadline}</span>
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

        {/* hidden input field start here        */}
        <div className="hidden">
          <label
            htmlFor="ass_id"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Marks
          </label>
          <input
            type="text"
            name="ass_id"
            defaultValue={_id}
            id="ass_id"
            placeholder="Enter ass_id"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="hidden">
          <label
            htmlFor="difficulty"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Marks
          </label>
          <input
            type="text"
            name="difficulty"
            defaultValue={difficulty}
            id="difficulty"
            placeholder="Enter difficulty"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="hidden">
          <label
            htmlFor="marks"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Marks
          </label>
          <input
            type="number"
            name="marks"
            id="marks"
            min="0"
            defaultValue={marks}
            placeholder="Enter marks"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="hidden">
          <label
            htmlFor="marksGiven"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Marks Given
          </label>
          <input
            type="text"
            name="marksGiven"
            id="marksGiven"
            defaultValue=""
            placeholder="Enter marks"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="hidden">
          <label
            htmlFor="feedback"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Feedback
          </label>
          <textarea
            name="feedback"
            id="feedback"
            rows="3"
            defaultValue=""
            placeholder="Write feedback here..."
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitAssignment;
