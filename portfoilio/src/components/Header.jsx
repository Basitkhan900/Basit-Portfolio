import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/basit.jpeg";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Typedtext from "./Typedtext";
import Button from "./Button";

const Header = () => {
  const handleDownloadCV = () => {

    const link = document.createElement("a");
    link.href = "/AbdulBasit.pdf"; // This points to public/cv.pdf
    link.download = "AbdulBasit.pdf"; // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>


      <div className="flex flex-col md:flex-row justify-between items-center p-6 md:ml-30">


        <motion.div
          className="text-2xl font-bold text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h1 className="text-white">
            Hi It's Me <br /> Abdul Basit
          </h1>

          <p className="bg-gradient-to-r from-yellow-400 via-red-400 to-black inline-block text-transparent bg-clip-text mt-6">
            <Typedtext />
          </p>

          <div className="max-w-xl mt-6 mx-auto md:mx-0">
            <p className="text-amber-50 leading-relaxed break-words">
              A MERN stack developer builds full-stack web applications using
              MongoDB, Express, React, and Node, creating scalable, secure, and
              user-friendly modern web solutions.
            </p>
          </div>

        </motion.div>


        <motion.div
          className="mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <img
            src={logo}
            className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full object-cover md:mr-30 md:mt-20 transition-transform duration-500 hover:scale-110"
            alt="Profile"
          />

        </motion.div>

      </div>


      <motion.div
        className="flex justify-center md:justify-start gap-8 md:gap-12 text-2xl font-bold md:ml-30 p-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >

        <FaLinkedin className="text-zinc-50 text-4xl transition duration-200 ease-linear hover:text-amber-400 transform hover:-translate-y-1 hover:scale-110 rounded-full border border-gray-400" />

        <FaFacebook className="text-zinc-50 text-4xl transition duration-200 ease-linear hover:text-amber-400 transform hover:-translate-y-1 hover:scale-110 rounded-full border border-gray-400" />

        <FaGithub className="text-zinc-50 text-4xl transition duration-200 ease-linear hover:text-amber-400 transform hover:-translate-y-1 hover:scale-110 rounded-full border border-gray-400" />

        <FaInstagram className="text-zinc-50 text-4xl transition duration-200 ease-linear hover:text-amber-400 transform hover:-translate-y-1 hover:scale-110 rounded-full border border-gray-400" />

      </motion.div>


      <motion.div
        className="flex justify-center md:justify-start gap-6 md:gap-10 md:ml-30 p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >

        <Button title={"Download CV"} onClick={handleDownloadCV} />

        <Button title={"More Info"} />

      </motion.div>

    </div>
  );
};

export default Header;