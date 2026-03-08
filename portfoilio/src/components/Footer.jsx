import React from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-amber-50 mt-20">


      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">


        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-500">
            Abdul Basit
          </h2>

          <p className="text-sm leading-relaxed text-gray-300">
            MERN Stack Developer passionate about building modern,
            responsive, and user-friendly web applications.
          </p>
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-purple-400 cursor-pointer">Home</li>
            <li className="hover:text-purple-400 cursor-pointer">About</li>
            <li className="hover:text-purple-400 cursor-pointer">Skills</li>
            <li className="hover:text-purple-400 cursor-pointer">Projects</li>
            <li className="hover:text-purple-400 cursor-pointer">Contact</li>
          </ul>
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Me</h2>

          <div className="flex justify-center md:justify-start gap-5 text-2xl">

            <FaLinkedin className="hover:text-purple-400 cursor-pointer transition" />

            <FaFacebook className="hover:text-purple-400 cursor-pointer transition" />

            <FaGithub className="hover:text-purple-400 cursor-pointer transition" />

            <FaInstagram className="hover:text-purple-400 cursor-pointer transition" />

          </div>
        </div>

      </div>


      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">

        <p className="flex items-center justify-center gap-2 flex-wrap">
          © {new Date().getFullYear()} Abdul Basit | Made with
          <FaHeart className="text-red-500" />
          using React
        </p>

      </div>

    </footer>
  );
};

export default Footer;