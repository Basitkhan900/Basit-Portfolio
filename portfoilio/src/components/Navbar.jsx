import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        background: "rgba(6,3,15,0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(139,92,246,0.18)",
      }}
      className="text-white sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <h1
            className="text-2xl font-black cursor-pointer tracking-tight select-none"
            style={{
              background: "linear-gradient(135deg,#a855f7,#6366f1,#60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Abdul Basit
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium text-sm text-gray-300">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `relative group transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {/* Animated underline — always full when active */}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: "linear-gradient(90deg,#a855f7,#6366f1)",
                      boxShadow: isActive ? "0 0 8px rgba(168,85,247,0.7)" : "none",
                    }}
                  />
                  {/* Active dot indicator */}
                  {isActive && (
                    <span
                      className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#a855f7", boxShadow: "0 0 6px #a855f7" }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <a
            href="https://www.linkedin.com/in/abdul-basit-55a619318/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
              boxShadow: "0 0 18px rgba(124,58,237,0.45)",
            }}
          >
            <FaLinkedin className="text-base" />
            LinkedIn
          </a>
          <Link
            to="/Contact"
            className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-purple-500/20"
            style={{
              border: "1px solid rgba(168,85,247,0.5)",
              color: "#c084fc",
              background: "rgba(139,92,246,0.08)",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-purple-400 transition-transform duration-200 hover:scale-110"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "rgba(6,3,15,0.97)",
          borderTop: "1px solid rgba(139,92,246,0.12)",
        }}
      >
        <nav className="flex flex-col px-6 py-5 space-y-4 text-center font-medium text-gray-300">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-200 font-medium ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "text-gray-300 hover:text-purple-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="flex justify-center gap-3 pt-4 border-t border-purple-900/30">
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
                border: "1px solid rgba(168,85,247,0.5)",
                color: "#c084fc",
                background: "rgba(139,92,246,0.08)",
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