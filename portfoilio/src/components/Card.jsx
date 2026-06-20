import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ id, image, title, disc, live, githubLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col bg-[#0c0a15] rounded-2xl overflow-hidden border border-purple-900/30 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)] hover:-translate-y-1"
    >
      {/* Image Area - Landscape aspect ratio for screenshots */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-black relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient to blend the image into the card body */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0c0a15] to-transparent pointer-events-none" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {disc}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-2">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-lg shadow-purple-900/20"
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          )}
          
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 text-gray-300 transition-colors border border-white/10"
            >
              <FaGithub size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;