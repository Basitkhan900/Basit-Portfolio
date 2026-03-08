import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ id, image, title, disc, live, githubLink }) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative w-full h-[450px] rounded-3xl p-6 transition-all duration-500 cursor-pointer flex flex-col overflow-hidden
                 bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:border-indigo-500/50"
    >
      {/* Image Area with Zoom */}
      <div className="w-full h-48 rounded-2xl mb-6 relative overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />
        {/* Soft gradient from bottom to blend image into card */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>

        {/* Floating Accent Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-indigo-300">
          Project
        </div>
      </div>

      {/* Context Area */}
      <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {disc}
      </p>

      {/* Action Area & Links */}
      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">

        {/* Links Container */}
        <div className="flex gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg text-xs font-semibold hover:bg-indigo-500 hover:text-white transition-colors duration-300"
            >
              <FaExternalLinkAlt size={12} /> Live
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-xs font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FaGithub size={14} /> Source
            </a>
          )}
        </div>

        {/* View Project Arrow (Purely visual/aesthetic cue) */}
        <div className="text-sm font-medium text-gray-500 group-hover:text-indigo-400 transition-colors flex items-center gap-1">
          <span className="hidden sm:inline">Explore</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

      </div>
    </motion.div>
  );
};

export default Card;