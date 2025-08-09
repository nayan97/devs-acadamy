import React from "react";
import { motion } from "motion/react";

const mentors = [
  {
    name: "Ayesha Khan",
    role: "MERN Stack Developer",
    expertise: ["MongoDB", "Express.js", "React.js", "Node.js"],
    experience: "5+ Years",
    studentsTrained: 1200,
    image: "https://i.ibb.co/7j3mT6f/mern-mentor.jpg",
    buttonText: "View Profile",
  },
  {
    name: "Ravi Sharma",
    role: "UI/UX Designer",
    expertise: ["Figma", "Adobe XD", "User Research", "Wireframing"],
    experience: "7+ Years",
    studentsTrained: 1500,
    image: "https://i.ibb.co/BZ0g3D1/uiux-mentor.jpg",
    buttonText: "View Profile",
  },
  {
    name: "Nusrat Jahan",
    role: "Laravel Developer",
    expertise: ["Laravel", "PHP", "MySQL", "REST API"],
    experience: "6+ Years",
    studentsTrained: 1000,
    image: "https://i.ibb.co/hHhF7XJ/laravel-mentor.jpg",
    buttonText: "View Profile",
  },
  {
    name: "Aditya Verma",
    role: "MERN Stack Developer",
    expertise: ["Next.js", "GraphQL", "TypeScript"],
    experience: "4+ Years",
    studentsTrained: 900,
    image: "https://i.ibb.co/n8CLHjgx/4505104-8592-8.webp",
    buttonText: "View Profile",
  },
  {
    name: "Priya Patel",
    role: "UI/UX Designer",
    expertise: ["Sketch", "Prototyping", "Accessibility Design"],
    experience: "5+ Years",
    studentsTrained: 800,
    image: "https://i.ibb.co/DKz8TZf/uiux-mentor2.jpg",
    buttonText: "View Profile",
  },
  {
    name: "Farhan Ahmed",
    role: "Laravel Developer",
    expertise: ["Laravel", "Livewire", "Vue.js"],
    experience: "5+ Years",
    studentsTrained: 1100,
    image: "https://i.ibb.co/HPKzCjq/laravel-mentor2.jpg",
    buttonText: "View Profile",
  },
];

const Mentors = () => {
  return (
    <div>
      <section className="py-10 px-5">
        <div className="text-center py-12">
          <h3 className="text-[#00BCFF] text-4xl font-bold">
            Our{" "}
            <motion.span
              animate={{
                color: ["#00ff00", "#ff0080", "#00BCFF"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              Features
            </motion.span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.slice(0, 4).map((mentor, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow">
              <img
                src={mentor.image}
                alt={mentor.title}
                className="rounded-lg mb-3 text-center"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold truncate py-4">
                  {mentor.name}
                </h3>
                <h5>{mentor.role}</h5>
              </div>
              <button className="font-semibold mt-3 w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition">
                {mentor.buttonText} →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mentors;
