import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ name, percent }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span className="font-semibold">{percent}%</span>
      </div>

      <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="h-3 bg-purple-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const SkillSec = () => {
  return (
    <div className="mt-20">

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My <span className="text-purple-600">Skills</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">

        {/* Frontend */}
        <motion.div
          className="bg-gradient-to-r from-rose-500 to-black p-8 rounded-xl shadow-lg text-amber-50"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-6">Frontend Development</h2>

          <SkillBar name="HTML" percent={100} />
          <SkillBar name="CSS" percent={100} />
          <SkillBar name="JavaScript" percent={80} />
          <SkillBar name="Taiwind css" percent={100} />
          <SkillBar name="React js" percent={80} />
        </motion.div>

        {/* Backend */}
        <motion.div
          className="bg-gradient-to-r from-rose-500 to-black p-8 rounded-xl shadow-lg text-amber-50"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-6">
            Backend Development
          </h2>

          <SkillBar name="Node js" percent={90} />
          <SkillBar name="Express js" percent={80} />
          <SkillBar name="Api's" percent={70} />
          <SkillBar name="Database" percent={90} />
          <SkillBar name="intigration" percent={100} />
        </motion.div>

      </div>
    </div>
  );
};

export default SkillSec;