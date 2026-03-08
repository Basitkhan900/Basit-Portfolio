import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/basit.jpeg";
import Button from "./Button";

const Aboutsec = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-8 mt-[100px]">

      {/* Image Section */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={logo}
          className="w-[250px] h-[350px] md:w-[350px] md:h-[500px] object-cover rounded-lg transition-transform duration-500 hover:scale-110"
          alt="About"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >

        <motion.h1
          className="font-bold text-4xl text-amber-50 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-amber-50 leading-relaxed break-words"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I am a passionate and motivated MERN Stack Developer with a strong
          interest in building modern, responsive, and user-friendly web
          applications. I enjoy turning ideas into real-world digital solutions
          using MongoDB, Express.js, React.js, and Node.js. My focus is on
          writing clean, efficient code and creating smooth user experiences.
          I am always eager to learn new technologies and improve my skills.
          Whether working on personal projects or team-based applications, I
          give my best effort to deliver high-quality results. My goal is to
          grow as a professional developer and contribute to innovative
          projects that make a positive impact in the digital world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button title={"More About Us"} />
        </motion.div>

      </motion.div>

    </div>
  );
};

export default Aboutsec;