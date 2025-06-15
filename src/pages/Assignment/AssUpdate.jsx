import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const AssUpdate = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
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

  const handleUpdate = (e) => {
    e.preventDefault();

const form = e.target; 
const description = form.description.value.trim();
const minLength = description.length >= 30;

if (!minLength) {
  Swal.fire(
    "Warning",
    "Description length must be at least 30 characters",
    "warning"
  );
  return;
}
    const formData = new FormData(form);
    const updateAssignment = Object.fromEntries(formData.entries());
    console.log(updateAssignment);

    // send updated data into db
    if (user.email === userEmail) {
      fetch(`http://localhost:3000/assignment/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateAssignment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            console.log("added");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Data has been updated",
              showConfirmButton: false,
              timer: 2000,
            });

            navigate("/assignments");
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        text: "Make sure you are the athor of this item. You can not access other user data",
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-2xl shadow-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Update Assignment</h2>
        <h2 className="text-2xl font-bold text-gray-800">
          Athor: <span className="text-amber-700">{user.email}</span>{" "}
        </h2>

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

       <div>
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="DeadLine"
          >
            DeadLine
          </label>
          <input
            type="date"
            name="deadline"
            defaultValue={deadline}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="User"
          >User</label>
          <input
            type="email"
            name="userEmail"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={userEmail}
            readOnly
          />
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

export default AssUpdate;
