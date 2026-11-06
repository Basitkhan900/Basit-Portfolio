import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Mypic.jfif";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";

const stats = [
  { value: "10+", label: "Projects Done" },
  { value: "2.3", label: "Years Experience" },
  { value: "5+", label: "Happy Clients" },
];

const Aboutsec = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div
      className="relative overflow-hidden py-24 px-6 transition-colors duration-300 bg-slate-200/30 dark:bg-transparent border-y border-slate-300/40 dark:border-transparent"
    >
      {/* Background orb */}
      <div
        className="orb orb-indigo"
        style={{
          width: 400,
          height: 400,
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-2xl"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#4f46e5,#3b82f6)",
                filter: "blur(14px)",
                opacity: isDark ? 0.5 : 0.22,
              }}
            />
            <img
              src={logo}
              className="relative w-[280px] h-[380px] md:w-[340px] md:h-[460px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              style={{
                border: isDark
                  ? "2px solid rgba(139,92,246,0.4)"
                  : "3px solid #ffffff",
                boxShadow: isDark
                  ? "0 10px 30px rgba(0,0,0,0.5)"
                  : "0 20px 40px -10px rgba(124,58,237,0.18), 0 4px 10px rgba(0,0,0,0.05)",
              }}
              alt="Abdul Basit"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <span
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase transition-colors"
            style={{
              background: isDark ? "rgba(139,92,246,0.15)" : "rgba(124,58,237,0.08)",
              border: isDark ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(124,58,237,0.22)",
              color: isDark ? "#c084fc" : "#6d28d9",
              boxShadow: isDark ? "none" : "0 2px 8px rgba(124,58,237,0.06)",
            }}
          >
            ✦ About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
            Crafting Digital{" "}
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
              Experiences
            </span>
          </h2>

          <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8 transition-colors duration-300">
            I am a passionate and motivated MERN Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world digital solutions using MongoDB, Express.js, React.js, and Node.js. My focus is on writing clean, efficient code and creating smooth user experiences. I am always eager to learn new technologies and grow as a professional developer.
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center px-5 py-3 rounded-2xl transition-all duration-300"
                style={{
                  background: isDark ? "rgba(139,92,246,0.08)" : "#ffffff",
                  border: isDark
                    ? "1px solid rgba(139,92,246,0.2)"
                    : "1px solid rgba(203, 213, 225, 0.8)",
                  boxShadow: isDark ? "none" : "0 4px 15px -2px rgba(15,23,42,0.05)",
                }}
              >
                <div
                  className="text-3xl font-black"
                  style={{
                    background: isDark
                      ? "linear-gradient(135deg,#a855f7,#6366f1)"
                      : "linear-gradient(135deg,#7c3aed,#4f46e5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </div>
                <div className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium transition-colors duration-300">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <Button title={"More About Me"} onClick={() => navigate("/About")} />
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutsec;
