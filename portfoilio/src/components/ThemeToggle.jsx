import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center justify-center p-2 rounded-full cursor-pointer transition-all duration-300 focus:outline-none hover:scale-110 active:scale-95 ${className}`}
      style={{
        background: isDark
          ? "rgba(139, 92, 246, 0.15)"
          : "rgba(245, 158, 11, 0.15)",
        border: isDark
          ? "1px solid rgba(168, 85, 247, 0.35)"
          : "1px solid rgba(245, 158, 11, 0.35)",
        boxShadow: isDark
          ? "0 0 15px rgba(139, 92, 246, 0.25)"
          : "0 0 15px rgba(245, 158, 11, 0.25)",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center text-purple-300"
          >
            <Moon size={19} className="stroke-[2.2]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center text-amber-500"
          >
            <Sun size={19} className="stroke-[2.2]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
