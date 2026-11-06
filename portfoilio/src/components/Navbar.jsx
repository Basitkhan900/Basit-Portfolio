import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  const links = [
    ["Home", "/"],
    ["About", "/About"],
    ["Skills", "/skill"],
    ["Projects", "/Projects"],
    ["Contact", "/Contact"],
  ];

  return (
    <header
      style={{
        background: isDark ? "rgba(6,3,15,0.8)" : "rgba(238, 242, 246, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: isDark
          ? "1px solid rgba(139,92,246,0.18)"
          : "1px solid rgba(203, 213, 225, 0.8)",
        boxShadow: isDark ? "none" : "0 4px 20px -2px rgba(15, 23, 42, 0.04)",
      }}
      className="sticky top-0 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <h1
            className="text-2xl font-black cursor-pointer tracking-tight select-none"
            style={{
              background: isDark
                ? "linear-gradient(135deg,#a855f7,#6366f1,#60a5fa)"
                : "linear-gradient(135deg,#7c3aed,#4f46e5,#2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Abdul Basit
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium text-sm">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `relative group transition-colors duration-200 py-1 ${
                  isActive
                    ? isDark
                      ? "text-white font-semibold"
                      : "text-purple-700 font-bold"
                    : isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-slate-600 hover:text-purple-600 font-medium"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {/* Animated underline */}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: isDark
                        ? "linear-gradient(90deg,#a855f7,#6366f1)"
                        : "linear-gradient(90deg,#7c3aed,#4f46e5)",
                      boxShadow: isActive
                        ? isDark
                          ? "0 0 8px rgba(168,85,247,0.7)"
                          : "0 0 6px rgba(124,58,237,0.3)"
                        : "none",
                    }}
                  />
                  {/* Active dot indicator */}
                  {isActive && (
                    <span
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: isDark ? "#a855f7" : "#7c3aed",
                        boxShadow: isDark ? "0 0 6px #a855f7" : "none",
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <ThemeToggle />

          <a
            href="https://www.linkedin.com/in/abdul-basit-55a619318/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-sm"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
              boxShadow: isDark
                ? "0 0 18px rgba(124,58,237,0.45)"
                : "0 4px 14px rgba(124,58,237,0.3)",
            }}
          >
            <FaLinkedin className="text-base" />
            LinkedIn
          </a>
          <Link
            to="/Contact"
            className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              border: isDark
                ? "1px solid rgba(168,85,247,0.5)"
                : "1.5px solid rgba(124,58,237,0.35)",
              color: isDark ? "#c084fc" : "#7c3aed",
              background: isDark
                ? "rgba(139,92,246,0.08)"
                : "rgba(124,58,237,0.06)",
            }}
            onMouseEnter={(e) => {
              if (!isDark) {
                e.currentTarget.style.background = "#7c3aed";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "#7c3aed";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(124,58,237,0.25)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isDark) {
                e.currentTarget.style.background = "rgba(124,58,237,0.06)";
                e.currentTarget.style.color = "#7c3aed";
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className="focus:outline-none p-1.5 rounded-lg text-purple-600 dark:text-purple-400 hover:text-purple-500 transition-transform duration-200 hover:scale-110 cursor-pointer"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: isDark ? "rgba(6,3,15,0.97)" : "rgba(238, 242, 246, 0.98)",
          borderTop: isDark
            ? "1px solid rgba(139,92,246,0.12)"
            : "1px solid rgba(203, 213, 225, 0.9)",
          boxShadow: isDark ? "none" : "0 15px 30px rgba(0,0,0,0.08)",
        }}
      >
        <nav className="flex flex-col px-6 py-5 space-y-4 text-center font-medium">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-200 font-medium py-1 ${
                  isActive
                    ? isDark
                      ? "text-purple-400 font-semibold"
                      : "text-purple-700 font-bold"
                    : isDark
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-slate-700 hover:text-purple-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div
            className="flex justify-center gap-3 pt-4 border-t"
            style={{
              borderColor: isDark
                ? "rgba(139,92,246,0.18)"
                : "rgba(203, 213, 225, 0.8)",
            }}
          >
            <a
              href="https://www.linkedin.com/in/abdul-basit-55a619318/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <Link
              to="/Contact"
              onClick={() => setOpen(false)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{
                border: isDark
                  ? "1px solid rgba(168,85,247,0.5)"
                  : "1.5px solid rgba(124,58,237,0.35)",
                color: isDark ? "#c084fc" : "#7c3aed",
                background: isDark
                  ? "rgba(139,92,246,0.08)"
                  : "rgba(124,58,237,0.06)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
