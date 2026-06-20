import React from "react";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML", percent: 100 },
  { name: "CSS", percent: 100 },
  { name: "JavaScript", percent: 80 },
  { name: "Tailwind CSS", percent: 100 },
  { name: "React.js", percent: 80 },
];

const backendSkills = [
  { name: "Node.js", percent: 90 },
  { name: "Express.js", percent: 80 },
  { name: "REST APIs", percent: 70 },
  { name: "Database (MongoDB)", percent: 90 },
  { name: "Integration", percent: 100 },
];

const SkillBar = ({ name, percent, delay = 0 }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-2 text-sm">
      <span className="font-semibold text-gray-200">{name}</span>
      <span className="font-bold" style={{ color: "#a78bfa" }}>{percent}%</span>
    </div>
    <div
      className="w-full h-2 rounded-full overflow-hidden"
      style={{ background: "rgba(255,255,255,0.07)" }}
    >
      <motion.div
        className="h-2 rounded-full"
        style={{ background: "linear-gradient(90deg,#7c3aed,#a855f7,#6366f1)" }}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

const SkillSec = () => {
  return (
    <div className="relative overflow-hidden py-24 px-6">

      {/* Orb */}
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.12 }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase"
            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.35)", color: "#c084fc" }}
          >
            ✦ What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            My{" "}
            <span style={{ background: "linear-gradient(135deg,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Skills
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Frontend Card */}
          <motion.div
            className="p-8 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(139,92,246,0.2)",
              boxShadow: "0 0 60px rgba(124,58,237,0.06)",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 16px rgba(124,58,237,0.45)" }}
              >
                FE
              </div>
              <h3 className="text-xl font-bold text-white">Frontend Development</h3>
            </div>
            {frontendSkills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 0.1} />)}
          </motion.div>

          {/* Backend Card */}
          <motion.div
            className="p-8 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(99,102,241,0.2)",
              boxShadow: "0 0 60px rgba(99,102,241,0.06)",
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: "linear-gradient(135deg,#4f46e5,#3b82f6)", boxShadow: "0 0 16px rgba(99,102,241,0.45)" }}
              >
                BE
              </div>
              <h3 className="text-xl font-bold text-white">Backend Development</h3>
            </div>
            {backendSkills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 0.1} />)}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SkillSec;