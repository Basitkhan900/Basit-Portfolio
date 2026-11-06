import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const contactInfo = [
  { icon: FaEnvelope, label: "Email", value: "basitbangash8899@gmail.com" },
  { icon: FaPhoneAlt, label: "Phone", value: "+92 3368222900" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Pakistan" },
];

const Contactsec = () => {
  const { isDark } = useTheme();

  return (
    <div className="relative overflow-hidden py-24 px-6">

      {/* Orb */}
      <div
        className="orb orb-purple"
        style={{ width: 450, height: 450, bottom: "-100px", left: "-100px" }}
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
            ✦ Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight transition-colors duration-300">
            Let's{" "}
            <span className="gradient-text">
              Work Together
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-lg transition-colors duration-300">
              Feel free to reach out for any project, collaboration, or freelance work.
              I'm always open to new opportunities and exciting ideas.
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: isDark ? "rgba(139,92,246,0.08)" : "#ffffff",
                    border: isDark
                      ? "1px solid rgba(139,92,246,0.2)"
                      : "1px solid rgba(203, 213, 225, 0.9)",
                    boxShadow: isDark
                      ? "none"
                      : "0 4px 15px -2px rgba(15,23,42,0.05)",
                  }}
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
                      boxShadow: isDark
                        ? "0 0 12px rgba(124,58,237,0.4)"
                        : "0 4px 12px rgba(124,58,237,0.3)",
                    }}
                  >
                    <Icon className="text-white text-base" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 dark:text-gray-500 font-semibold uppercase tracking-wider">
                      {label}
                    </div>
                    <div className="text-slate-800 dark:text-white font-semibold transition-colors duration-300">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
                backdropFilter: "blur(20px)",
                border: isDark
                  ? "1px solid rgba(139,92,246,0.2)"
                  : "1px solid rgba(203, 213, 225, 0.9)",
                boxShadow: isDark
                  ? "0 0 60px rgba(124,58,237,0.08)"
                  : "0 12px 35px -5px rgba(15,23,42,0.06)",
              }}
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3.5 rounded-xl text-slate-800 dark:text-white text-sm placeholder-slate-400 dark:placeholder-gray-500 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.05)" : "#f8fafc",
                      border: isDark
                        ? "1px solid rgba(139,92,246,0.2)"
                        : "1.5px solid rgba(203, 213, 225, 0.9)",
                    }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3.5 rounded-xl text-slate-800 dark:text-white text-sm placeholder-slate-400 dark:placeholder-gray-500 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.05)" : "#f8fafc",
                      border: isDark
                        ? "1px solid rgba(139,92,246,0.2)"
                        : "1.5px solid rgba(203, 213, 225, 0.9)",
                    }}
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-3.5 rounded-xl text-slate-800 dark:text-white text-sm placeholder-slate-400 dark:placeholder-gray-500 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 resize-none"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.05)" : "#f8fafc",
                      border: isDark
                        ? "1px solid rgba(139,92,246,0.2)"
                        : "1.5px solid rgba(203, 213, 225, 0.9)",
                    }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 text-white font-bold rounded-xl transition-all duration-300 cursor-pointer shadow-md"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
                    boxShadow: isDark
                      ? "0 0 30px rgba(124,58,237,0.4)"
                      : "0 8px 25px rgba(124,58,237,0.3)",
                  }}
                >
                  Send Message ✦
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contactsec;
