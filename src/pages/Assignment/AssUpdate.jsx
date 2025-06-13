import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useLoaderData } from "react-router";

const AssUpdate = () => {
  const { user } = use(AuthContext);
  const { _id, title, thumbnail, deadline, userEmail, description, marks, difficulty } = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-2xl shadow-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Update Assignment</h2>

        <div>
          <label
            htmlFor="title"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
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
            defaultValue={description}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="marks"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Marks
          </label>
          <input
            type="number"
            id="marks"
            name="marks"
            defaultValue={marks}
            required
            min="0"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="thumbnail"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Thumbnail Image URL
          </label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            defaultValue={thumbnail}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="difficulty"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Difficulty Level
          </label>
   
          <select
            name="difficulty"
            defaultValue={difficulty}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <input
          type="date"
          name="deadline"
          defaultValue={deadline}
          className="input input-accent w-full"
          required
        />

        <input
          type="email"
          name="userEmail"
          className="input input-accent w-full"
          defaultValue={user.email}
          readOnly
        />

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

export default AssUpdate;
