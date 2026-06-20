import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/basit.jpeg";
import Button from "./Button";

const stats = [
  { value: "10+", label: "Projects Done" },
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Happy Clients" },
];

const Aboutsec = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden py-24 px-6">

      {/* Background orb */}
      <div className="orb orb-indigo" style={{ width: 400, height: 400, top: "50%", right: "-100px", transform: "translateY(-50%)", opacity: 0.3 }} />

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
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5,#3b82f6)", filter: "blur(12px)", opacity: 0.5 }}
            />
            <img
              src={logo}
              className="relative w-[280px] h-[380px] md:w-[340px] md:h-[460px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              style={{ border: "2px solid rgba(139,92,246,0.4)" }}
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
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase"
            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.35)", color: "#c084fc" }}
          >
            ✦ About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Crafting Digital{" "}
            <span style={{ background: "linear-gradient(135deg,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Experiences
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            I am a passionate and motivated MERN Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world digital solutions using MongoDB, Express.js, React.js, and Node.js. My focus is on writing clean, efficient code and creating smooth user experiences. I am always eager to learn new technologies and grow as a professional developer.
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8 mb-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-3xl font-black"
                  style={{ background: "linear-gradient(135deg,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  {value}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">{label}</div>
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