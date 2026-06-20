import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  { icon: FaEnvelope, label: "Email", value: "mohaz33555@email.com" },
  { icon: FaPhoneAlt, label: "Phone", value: "+92 3368222900" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Pakistan" },
];

const Contactsec = () => {
  return (
    <div className="relative overflow-hidden py-24 px-6">

      {/* Orb */}
      <div className="orb orb-purple" style={{ width: 450, height: 450, bottom: "-100px", left: "-100px", opacity: 0.25 }} />

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
            ✦ Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Let's{" "}
            <span style={{ background: "linear-gradient(135deg,#a855f7,#6366f1,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
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
            <p className="text-gray-400 leading-relaxed text-lg">
              Feel free to reach out for any project, collaboration, or freelance work.
              I'm always open to new opportunities and exciting ideas.
            </p>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 12px rgba(124,58,237,0.4)" }}
                  >
                    <Icon className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</div>
                    <div className="text-white font-medium">{value}</div>
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
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(139,92,246,0.2)",
                boxShadow: "0 0 60px rgba(124,58,237,0.08)",
              }}
            >
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3.5 rounded-xl text-white text-sm placeholder-gray-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(139,92,246,0.2)" }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3.5 rounded-xl text-white text-sm placeholder-gray-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(139,92,246,0.2)" }}
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3.5 rounded-xl text-white text-sm placeholder-gray-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-purple-500 resize-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(139,92,246,0.2)" }}
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-3.5 text-white font-bold rounded-xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
                    boxShadow: "0 0 30px rgba(124,58,237,0.4)",
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