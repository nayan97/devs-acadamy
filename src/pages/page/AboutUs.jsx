import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        About the Developer
      </h2>

      {/* Developer Bio */}
      <div className="bg-base-100 shadow-lg p-6 rounded-2xl mb-6">
        <p className="text-lg">
          👋 Hi, I'm Nayan Islam, a passionate Full-Stack Web Developer based in
          Bangladesh. I specialize in building modern, responsive, and engaging
          web applications using technologies like Laravel, PHP, JavaScript
          (ES6+), React, and MySQL. With a background in Electrical and
          Electronics Engineering and 8 years of professional experience as a
          service engineer, I bring a unique problem-solving mindset and strong
          analytical skills to my development work. I’m passionate about writing
          clean, maintainable, and scalable code, following best practices, and
          staying up-to-date with the latest trends in web development. My
          mission is to deliver meaningful digital experiences that are both
          user-friendly and efficient.
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-base-200 shadow-md p-4 rounded-xl mb-6">
        <h3 className="text-2xl font-semibold mb-2">
          🛠️ Technologies & Skills
        </h3>
        <p>
          React, Tailwind CSS, Node.js, Express, MongoDB, Firebase Auth, React
          Router, DaisyUI, Framer Motion, REST API, and more.
        </p>
      </div>

      {/* Projects Section */}
      <div className="bg-base-100 shadow-md p-4 rounded-xl mb-6">
        <h3 className="text-2xl font-semibold mb-2">📁 Projects</h3>
        <p>
          I have built over <strong>10+ full-stack projects</strong>, ranging
          from tourism platforms to admin dashboards.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li>
            <a
              href="https://gobangla-fc335.web.app/"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoBangla - Tour Booking App
            </a>{" "}
            (React + MongoDB + Firebase Auth)
          </li>
          <li>
            <a
              href="https://github.com/nayan97"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Portfolio Site
            </a>{" "}
            (Responsive with dark mode and animations)
          </li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="text-center mt-6 space-x-4">
        <a
          href="https://github.com/nayan97"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xl"
        >
          <FaGithub className="inline mr-1" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nayan-islam-91724a196/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xl"
        >
          <FaLinkedin className="inline ml-4 mr-1" /> LinkedIn
        </a>
      </div>
    </motion.div>
  );
};

export default AboutUs;
