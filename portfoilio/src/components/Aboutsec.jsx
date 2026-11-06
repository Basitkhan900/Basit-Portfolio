import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Mypic.jfif";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const stats = [
  { value: "10+", label: "Projects Done" },
  { value: "2.3", label: "Years Experience" },
  { value: "5+", label: "Happy Clients" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Aboutsec = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const techStack = [
    {
      name: "MongoDB",
      role: "NoSQL Database",
      icon: SiMongodb,
      brandColor: "#13AA52",
      glowLight: "rgba(19, 170, 82, 0.25)",
      glowDark: "rgba(19, 170, 82, 0.4)",
      bgLight: "rgba(19, 170, 82, 0.08)",
      bgDark: "rgba(19, 170, 82, 0.14)",
    },
    {
      name: "Express.js",
      role: "Backend API",
      icon: SiExpress,
      brandColor: isDark ? "#FFFFFF" : "#111827",
      glowLight: "rgba(17, 24, 39, 0.15)",
      glowDark: "rgba(255, 255, 255, 0.25)",
      bgLight: "rgba(17, 24, 39, 0.06)",
      bgDark: "rgba(255, 255, 255, 0.08)",
    },
    {
      name: "React.js",
      role: "Frontend UI",
      icon: SiReact,
      brandColor: "#00D8FE",
      glowLight: "rgba(0, 216, 254, 0.25)",
      glowDark: "rgba(0, 216, 254, 0.4)",
      bgLight: "rgba(0, 216, 254, 0.08)",
      bgDark: "rgba(0, 216, 254, 0.14)",
    },
    {
      name: "Node.js",
      role: "JS Runtime",
      icon: SiNodedotjs,
      brandColor: "#5FA04E",
      glowLight: "rgba(95, 160, 78, 0.25)",
      glowDark: "rgba(95, 160, 78, 0.4)",
      bgLight: "rgba(95, 160, 78, 0.08)",
      bgDark: "rgba(95, 160, 78, 0.14)",
    },
    {
      name: "Next.js",
      role: "Full-Stack React",
      icon: SiNextdotjs,
      brandColor: isDark ? "#FFFFFF" : "#000000",
      glowLight: "rgba(0, 0, 0, 0.15)",
      glowDark: "rgba(255, 255, 255, 0.25)",
      bgLight: "rgba(0, 0, 0, 0.06)",
      bgDark: "rgba(255, 255, 255, 0.08)",
    },
    {
      name: "TypeScript",
      role: "Type Safety",
      icon: SiTypescript,
      brandColor: "#3178C6",
      glowLight: "rgba(49, 120, 198, 0.25)",
      glowDark: "rgba(49, 120, 198, 0.4)",
      bgLight: "rgba(49, 120, 198, 0.08)",
      bgDark: "rgba(49, 120, 198, 0.14)",
    },
  ];

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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
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
              <span className="gradient-text-purple">
                Experiences
              </span>
            </h2>

            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
              I am a passionate and motivated Full-Stack Developer with a strong interest in building modern, responsive, and scalable web applications. I enjoy turning ideas into real-world digital solutions using <span className="font-semibold text-slate-800 dark:text-gray-200">MongoDB</span>, <span className="font-semibold text-slate-800 dark:text-gray-200">Express.js</span>, <span className="font-semibold text-slate-800 dark:text-gray-200">React.js</span>, <span className="font-semibold text-slate-800 dark:text-gray-200">Node.js</span>, <span className="font-semibold text-slate-800 dark:text-gray-200">Next.js</span>, and <span className="font-semibold text-slate-800 dark:text-gray-200">TypeScript</span>. My focus is on writing clean, type-safe, and efficient code while crafting smooth user experiences. I am always eager to learn new technologies and grow as a professional developer.
            </p>

            {/* Quick Tech Badges under paragraph */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-8">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.04)" : "#ffffff",
                      border: isDark ? "1px solid rgba(255,255,255,0.09)" : "1px solid rgba(203,213,225,0.8)",
                      color: isDark ? "#e2e8f0" : "#334155",
                      boxShadow: isDark ? "none" : "0 2px 6px rgba(0,0,0,0.04)",
                    }}
                  >
                    <Icon style={{ color: tech.brandColor }} className="text-sm" />
                    {tech.name}
                  </span>
                );
              })}
            </div>

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
                    className="text-3xl font-black gradient-text-purple"
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

        {/* Attractive Tech Stack Logos Showcase under About section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-slate-300/50 dark:border-white/10"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <span
              className="inline-block text-xs font-semibold px-3.5 py-1 rounded-full mb-3 tracking-widest uppercase transition-colors"
              style={{
                background: isDark ? "rgba(139,92,246,0.15)" : "rgba(124,58,237,0.08)",
                border: isDark ? "1px solid rgba(139,92,246,0.3)" : "1px solid rgba(124,58,237,0.2)",
                color: isDark ? "#c084fc" : "#6d28d9",
              }}
            >
              ✦ Core Stack
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white transition-colors">
              Technologies I <span className="gradient-text-purple">Excel In</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-gray-400 mt-2 max-w-md">
              Specialized in modern full-stack development to build robust, scalable, and delightful web solutions.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
          >
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="group relative flex flex-col items-center justify-center p-5 rounded-2xl cursor-pointer transition-all duration-300"
                  style={{
                    background: isDark
                      ? "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))"
                      : "#ffffff",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(226, 232, 240, 0.9)",
                    boxShadow: isDark
                      ? "0 4px 20px -2px rgba(0,0,0,0.4)"
                      : "0 4px 20px -2px rgba(15,23,42,0.05)",
                  }}
                >
                  {/* Glowing aura on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${isDark ? tech.glowDark : tech.glowLight}, transparent 70%)`,
                    }}
                  />

                  {/* Icon Container */}
                  <div
                    className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 shadow-sm"
                    style={{
                      background: isDark ? tech.bgDark : tech.bgLight,
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(203,213,225,0.6)"}`,
                      boxShadow: `0 4px 15px ${isDark ? tech.glowDark : tech.glowLight}`,
                    }}
                  >
                    <Icon
                      className="text-3xl transition-transform duration-300 group-hover:rotate-6"
                      style={{ color: tech.brandColor }}
                    />
                  </div>

                  {/* Tech Name */}
                  <span className="relative z-10 text-sm font-bold text-slate-800 dark:text-white transition-colors duration-200 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {tech.name}
                  </span>

                  {/* Tech Subtitle */}
                  <span className="relative z-10 text-[11px] font-medium text-slate-500 dark:text-gray-400 mt-1 tracking-wide">
                    {tech.role}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutsec;
