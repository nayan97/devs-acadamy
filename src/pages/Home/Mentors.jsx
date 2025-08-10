import React, { useEffect, useState } from "react";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  // Fetch mentors data from public/mentors.json
  useEffect(() => {
    fetch("/mentors.json")
      .then((res) => res.json())
      .then((data) => setMentors(data))
      .catch((error) => console.error("Error fetching mentors:", error));
  }, []);

  // View profile handler
  const handleViewProfile = (mentor) => {
    alert(`Viewing profile for ${mentor.name}`);
    // Later you can navigate to a profile page, e.g.:
    // navigate(`/mentors/${mentor.id}`);
  };

  return (
    <section className="py-10 px-5">
      {/* Section Title */}
      <div className="text-center py-12">
        <h3 className="text-[#00BCFF] text-4xl font-bold">
          Our <span>Mentors</span>
        </h3>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.slice(0, 4).map((mentor, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="rounded-lg mb-3 w-full h-48 object-cover"
            />
            <div className="text-center flex-grow">
              <h3 className="text-xl font-semibold truncate py-4">
                {mentor.name}
              </h3>
              <h5 className="text-gray-500">{mentor.role}</h5>
            </div>
            <button
              onClick={() => handleViewProfile(mentor)}
              className="font-semibold mt-3 w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition"
            >
              {mentor.buttonText} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
