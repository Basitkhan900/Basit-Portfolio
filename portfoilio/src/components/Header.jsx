import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/basit.jpeg";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Typedtext from "./Typedtext";
import Button from "./Button";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays each child animation by 0.2s
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Smooth spring-like ease
  },
};

const Header = () => {
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/My-MERN-CV.pdf";
    link.download = "My-MERN-CV.pdf";
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
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: "-100px", left: "-100px", opacity: 0.5 }} />
      <div className="orb orb-blue" style={{ width: 400, height: 400, bottom: "-50px", right: "-80px", opacity: 0.4 }} />

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
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-lg shadow-purple-900/20"
            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.35)", color: "#c084fc" }}
          >
            ✦ Welcome to my Portfolio
          </motion.span>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-black leading-tight text-white mb-2">
            Hi, I'm <br />
            <span style={{ background: "linear-gradient(135deg,#a855f7,#6366f1,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Abdul Basit
            </span>
          </motion.h1>

          {/* Typed Text */}
          <motion.div variants={itemVariants} className="text-xl font-semibold mt-4 mb-6" style={{ color: "#a78bfa" }}>
            <Typedtext />
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed text-base max-w-lg mb-8">
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
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "#c084fc",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,92,246,0.35)"; e.currentTarget.style.boxShadow = "0 0 16px rgba(139,92,246,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(139,92,246,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
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
          className="flex-shrink-0"
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
            className="relative"
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, transparent 40%, #a855f7 80%, #4f46e5 100%)",
                padding: "4px",
                borderRadius: "9999px",
                filter: "blur(3px)",
                opacity: 0.8
              }}
            />
            <img
              src={logo}
              className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full object-cover"
              style={{
                border: "4px solid #06030f", // Match the background color to create a gap effect
                boxShadow: "0 0 60px rgba(124,58,237,0.4), 0 0 120px rgba(99,102,241,0.2)",
              }}
              alt="Abdul Basit"
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Header;