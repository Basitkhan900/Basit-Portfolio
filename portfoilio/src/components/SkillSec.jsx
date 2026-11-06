import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

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

const SkillBar = ({ name, percent, delay = 0, isDark }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-2 text-sm">
      <span className="font-semibold text-slate-800 dark:text-gray-200 transition-colors duration-300">
        {name}
      </span>
      <span className="font-bold" style={{ color: isDark ? "#a78bfa" : "#6d28d9" }}>
        {percent}%
      </span>
    </div>
    <div
      className="w-full h-2.5 rounded-full overflow-hidden transition-colors duration-300"
      style={{
        background: isDark ? "rgba(255,255,255,0.08)" : "#e2e8f0",
        border: isDark ? "none" : "1px solid rgba(203, 213, 225, 0.7)",
      }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{
          background: isDark
            ? "linear-gradient(90deg,#7c3aed,#a855f7,#6366f1)"
            : "linear-gradient(90deg,#7c3aed,#6366f1)",
        }}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

const SkillSec = () => {
  const { isDark } = useTheme();

  return (
    <div className="relative overflow-hidden py-24 px-6">

      {/* Orb */}
      <div
        className="orb orb-purple"
        style={{
          width: 500,
          height: 500,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

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
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase transition-colors"
            style={{
              background: isDark ? "rgba(139,92,246,0.15)" : "rgba(124,58,237,0.08)",
              border: isDark ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(124,58,237,0.22)",
              color: isDark ? "#c084fc" : "#6d28d9",
              boxShadow: isDark ? "none" : "0 2px 8px rgba(124,58,237,0.06)",
            }}
          >
            ✦ What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight transition-colors duration-300">
            My{" "}
            <span
              style={{
                background: isDark
                  ? "linear-gradient(135deg,#a855f7,#6366f1)"
                  : "linear-gradient(135deg,#7c3aed,#4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Frontend Card */}
          <motion.div
            className="p-8 rounded-2xl transition-all duration-300"
            style={{
              background: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
              backdropFilter: "blur(20px)",
              border: isDark
                ? "1px solid rgba(139,92,246,0.2)"
                : "1px solid rgba(203, 213, 225, 0.9)",
              boxShadow: isDark
                ? "0 0 60px rgba(124,58,237,0.06)"
                : "0 8px 25px -4px rgba(15,23,42,0.06)",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-md"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
                  boxShadow: isDark
                    ? "0 0 16px rgba(124,58,237,0.45)"
                    : "0 4px 14px rgba(124,58,237,0.3)",
                }}
              >
                FE
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                Frontend Development
              </h3>
            </div>
            {frontendSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.1} isDark={isDark} />
            ))}
          </motion.div>

          {/* Backend Card */}
          <motion.div
            className="p-8 rounded-2xl transition-all duration-300"
            style={{
              background: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
              backdropFilter: "blur(20px)",
              border: isDark
                ? "1px solid rgba(99,102,241,0.2)"
                : "1px solid rgba(203, 213, 225, 0.9)",
              boxShadow: isDark
                ? "0 0 60px rgba(99,102,241,0.06)"
                : "0 8px 25px -4px rgba(15,23,42,0.06)",
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-md"
                style={{
                  background: "linear-gradient(135deg,#4f46e5,#3b82f6)",
                  boxShadow: isDark
                    ? "0 0 16px rgba(99,102,241,0.45)"
                    : "0 4px 14px rgba(99,102,241,0.3)",
                }}
              >
                BE
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                Backend Development
              </h3>
            </div>
            {backendSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.1} isDark={isDark} />
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SkillSec;
