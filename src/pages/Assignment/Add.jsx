import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Add = () => {
  const { user } = use(AuthContext);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
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
    const assignmentData = Object.fromEntries(formData.entries());
    console.log("Successfully uploaded:", assignmentData);

    fetch("https://b11-a11-server-rho.vercel.app/addassignment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("added");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Create Assignment</h2>

        <div>
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="description"
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

        <div>
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="marks"
          >
            Marks
          </label>
          <input
            type="number"
            id="marks"
            name="marks"
            required
            min="0"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="thumbnail"
          >
            Thumbnail Image URL
          </label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-baseline gap-10">
          <div>
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="difficulty"
            >
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
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
              htmlFor="deadline"
            >
              Deadline
            </label>

            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="deadline"
              id="deadline"
              required
            />
          </div>
        </div>
        <div>
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor="User"
          >
            User
          </label>
          <input
            type="email"
            name="userEmail"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={user.email}
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

export default Add;
