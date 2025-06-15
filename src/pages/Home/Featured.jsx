import React from "react";
import { motion } from "motion/react";

const features = [
  {
    title: "WordPress Theme Development",
    category: "Design, Web Development",
    lessons: 20,
    duration: "30 Hours",
    level: "All Levels",
    image: "https://i.ibb.co/DP6y68Xp/fotwoobvkektaekkzj3q.jpg",
    buttonText: "All Details",
  },
  {
    title: "Meta Marketing (Basic to Advance)",
    category: "Design, Web Development",
    lessons: 20,
    duration: "30 Hours",
    level: "All Levels",
    image: "https://i.ibb.co/hFRB0WYF/course-1662724358.jpg", 
    buttonText: "All Details",
  },
  {
    title: "eCommerce & Product (Software) SEO",
    category: "Design, Web Development",
    lessons: 20,
    duration: "30 Hours",
    level: "All Levels",
    image: "https://i.ibb.co/ZpNHK0tb/seo-courses.jpg",
    buttonText: "All Details",
  },
];

const Featured = () => {
  return (
    <div>
      <section className="py-10 px-5">
            <div  className="text-center py-12">
                    <h3  className="text-[#00BCFF] text-4xl font-bold">Our  <span  className="text-[#18181B]">Features</span></h3>
                </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((course, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-lg mb-3"
              />
              <p className="text-sm text-gray-500">{course.category}</p>
              <h3 className="text-xl font-semibold truncate py-4">{course.title}</h3>
              <div className="flex justify-between text-md text-gray-600 mt-2 pb-2 font-semibold">
                <span>📄 {course.lessons} Lessons</span>
                <span>⏱ {course.duration}</span>
              </div>
              <p className="text-sm mt-1 font-semibold ">📈 {course.level}</p>
              <button className="font-semibold mt-3 w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition">
                {course.buttonText} →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Featured;
