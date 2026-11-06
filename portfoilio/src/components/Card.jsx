import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Card = ({ image, title, disc, live, githubLink }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
        isDark
          ? "bg-[#0c0a15] border border-purple-900/30 hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)]"
          : "bg-white border border-slate-300/80 shadow-[0_6px_20px_-3px_rgba(15,23,42,0.08)] hover:border-purple-400 hover:shadow-[0_18px_35px_-5px_rgba(124,58,237,0.15)]"
      }`}
    >
      {/* Image Area */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-black relative group border-b border-slate-200 dark:border-purple-900/20">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient blend */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1/4 pointer-events-none ${
            isDark
              ? "bg-gradient-to-t from-[#0c0a15] to-transparent"
              : "bg-gradient-to-t from-white via-white/50 to-transparent"
          }`}
        />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2.5 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300">
          {disc}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-2">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all shadow-md shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-[1.02]"
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
              className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-300/80"
              }`}
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
