import React from "react";


const Add = () => {
 
  return (
    <div>
      <form class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">Create Assignment</h2>

        <div>
          <label
            class="block mb-1 text-sm font-medium text-gray-700"
            for="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            class="block mb-1 text-sm font-medium text-gray-700"
            for="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            required
            class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div>
          <label
            class="block mb-1 text-sm font-medium text-gray-700"
            for="marks"
          >
            Marks
          </label>
          <input
            type="number"
            id="marks"
            name="marks"
            required
            min="0"
            class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            class="block mb-1 text-sm font-medium text-gray-700"
            for="thumbnail"
          >
            Thumbnail Image URL
          </label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            class="block mb-1 text-sm font-medium text-gray-700"
            for="difficulty"
          >
            Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            required
            class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    className="input input-accent w-full"
                    required
                />


        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
