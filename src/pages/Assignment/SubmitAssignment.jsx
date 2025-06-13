import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

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
              Athor: <span className="text-amber-700">{user.email}</span>{" "}
            </h2>
          </div>
          <div className="">
            <h3 className="font-bold bg-yellow-100 rounded-full p-2">Deadline: <span className="text-amber-700 text-xl">{deadline}</span> </h3>
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
