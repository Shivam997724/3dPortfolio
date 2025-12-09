import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constents";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utills/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="py-10!">
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="relative mt-20">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-600"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#915EFF] border-4 border-white"></div>

              {/* Card */}
              <div className="w-[45%] bg-[#1d1836] text-white p-6! rounded-xl shadow-md border border-gray-700">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-400">{exp.company_name}</p>

                <ul className="list-disc  mt-4 ml-5 space-y-2">
                  {exp.points.map((p, i) => (
                    <li key={i} className="text-gray-300 text-sm">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
