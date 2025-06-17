import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team/team_1.jpg";
import team2 from "../../assets/team/team_2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={team1}
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="max-w-sm rounded-t-4xl rounded-br-4xl shadow-2xl border-s-8 border-b-8 border-amber-400"
            />
            <motion.img
              src={team2}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm rounded-t-4xl rounded-br-4xl shadow-2xl border-s-8 border-b-8 border-amber-400"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Elevate Your Skills at career-corner
            </h1>
            <p className="py-6">
              Discover top-tier courses in Web Development
            </p>
            <button className="btn bg-green-600 text-white ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
