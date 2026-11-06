import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Mypic.jfif";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Typedtext from "./Typedtext";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Header = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Abdul_Basit_CV_Mernstack.pdf";
    link.download = "Abdul_Basit_CV_Mernstack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socials = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdul-basit-55a619318/", label: "LinkedIn" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center">

      {/* Decorative orbs */}
      <div
        className="orb orb-purple"
        style={{ width: 500, height: 500, top: "-100px", left: "-100px" }}
      />
      <div
        className="orb orb-blue"
        style={{ width: 400, height: 400, bottom: "-50px", right: "-80px" }}
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-10 gap-12">

        {/* Left — Text */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase transition-all duration-300"
            style={{
              background: isDark ? "rgba(139,92,246,0.15)" : "rgba(124,58,237,0.08)",
              border: isDark ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(124,58,237,0.22)",
              color: isDark ? "#c084fc" : "#6d28d9",
              boxShadow: isDark
                ? "0 4px 15px rgba(124,58,237,0.15)"
                : "0 2px 10px rgba(124,58,237,0.06)",
            }}
          >
            ✦ Welcome to my Portfolio
          </motion.span>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black leading-tight text-slate-900 dark:text-white mb-2 transition-colors duration-300"
          >
            Hi, I'm <br />
            <span className="gradient-text">
              Abdul Basit
            </span>
          </motion.h1>

          {/* Typed Text */}
          <motion.div
            variants={itemVariants}
            className="text-xl font-semibold mt-4 mb-6"
            style={{ color: isDark ? "#a78bfa" : "#6d28d9" }}
          >
            <Typedtext />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-gray-400 leading-relaxed text-base max-w-lg mb-8 transition-colors duration-300"
          >
            A passionate MERN Stack Developer building scalable, secure, and beautifully crafted web applications. Turning ideas into reality — one line of code at a time.
          </motion.p>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-4 mb-8">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xs"
                style={{
                  background: isDark ? "rgba(139,92,246,0.12)" : "#ffffff",
                  border: isDark
                    ? "1px solid rgba(139,92,246,0.3)"
                    : "1px solid rgba(203, 213, 225, 0.9)",
                  color: isDark ? "#c084fc" : "#6d28d9",
                  boxShadow: isDark
                    ? "none"
                    : "0 2px 8px rgba(15,23,42,0.04)",
                }}
                onMouseEnter={e => {
                  if (isDark) {
                    e.currentTarget.style.background = "rgba(139,92,246,0.35)";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(139,92,246,0.4)";
                  } else {
                    e.currentTarget.style.background = "#7c3aed";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "#7c3aed";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(124,58,237,0.3)";
                  }
                }}
                onMouseLeave={e => {
                  if (isDark) {
                    e.currentTarget.style.background = "rgba(139,92,246,0.12)";
                    e.currentTarget.style.boxShadow = "none";
                  } else {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.color = "#6d28d9";
                    e.currentTarget.style.borderColor = "rgba(203, 213, 225, 0.9)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(15,23,42,0.04)";
                  }
                }}
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button title={"Download CV"} onClick={handleDownloadCV} />
            <Button title={"More Info"} onClick={() => navigate("/About")} />
          </motion.div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          className="flex-shrink-0 flex justify-center items-center w-full md:w-auto mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Continuous floating animation wrapper */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex justify-center items-center"
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, transparent 40%, #7c3aed 80%, #4f46e5 100%)",
                padding: "4px",
                borderRadius: "9999px",
                filter: "blur(3px)",
                opacity: isDark ? 0.8 : 0.65,
              }}
            />
            <div
              className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full flex justify-center items-center p-3 md:p-5 transition-all duration-300"
              style={{
                border: isDark ? "4px solid #06030f" : "4px solid #ffffff",
                background: isDark ? "rgba(139,92,246,0.05)" : "#ffffff",
                boxShadow: isDark
                  ? "0 0 60px rgba(124,58,237,0.4), 0 0 120px rgba(99,102,241,0.2)"
                  : "0 20px 45px -10px rgba(124,58,237,0.22), 0 0 25px rgba(99,102,241,0.1), 0 4px 10px rgba(15,23,42,0.04)",
              }}
            >
              <img
                src={logo}
                className="w-full h-full rounded-full object-cover object-center shadow-md shadow-purple-900/20 dark:shadow-purple-900/40"
                alt="Abdul Basit"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Header;
