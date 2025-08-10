import React, { useEffect, useState } from "react";

const Featured = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.error("Failed to fetch features:", err));
  }, []);

  const handleButtonClick = (course) => {
    alert(`You clicked on ${course.title}`);
    // Replace alert with navigation if needed
    // e.g., navigate(`/courses/${course.id}`)
  };

  return (
    <section className="py-10 px-5">
      <div className="text-center py-12">
        <h3 className="text-[#00BCFF] text-4xl font-bold">
          Our <span>Features</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.slice(0, 4).map((course, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg mb-3 object-cover h-48 w-full"
            />
            <p className="text-sm text-gray-500">{course.category}</p>
            <h3 className="text-xl font-semibold truncate py-4">
              {course.title}
            </h3>


            <button
              onClick={() => handleButtonClick(course)}
              className="font-semibold mt-auto w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition"
            >
              {course.buttonText} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
