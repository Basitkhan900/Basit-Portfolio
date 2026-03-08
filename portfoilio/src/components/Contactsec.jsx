import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contactsec = () => {
  return (
    <div className=" text-white px-6 py-16">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mt-26"
      >
        Contact Us
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-14">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">
            Let’s Work Together
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Feel free to contact me for any project, collaboration,
            or freelance work. I’m always open to new opportunities.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400" />
              <span>mohaz33555@email.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-400" />
              <span>+92 3368222900</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-amber-400" />
              <span>Pakistan</span>
            </div>

          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-amber-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-black/50 text-white font-bold rounded hover:bg-amber-300 transition"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contactsec;