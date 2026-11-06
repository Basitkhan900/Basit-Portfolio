import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdul-basit-55a619318/", label: "LinkedIn" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

const quickLinks = [
  ["Home", "/"],
  ["About", "/About"],
  ["Skills", "/skill"],
  ["Projects", "/Projects"],
  ["Contact", "/Contact"],
];

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className="relative overflow-hidden mt-20 transition-colors duration-300"
      style={{
        borderTop: isDark
          ? "1px solid rgba(139,92,246,0.15)"
          : "1px solid rgba(203, 213, 225, 0.85)",
        background: isDark ? "transparent" : "#e2e8f0",
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)"
            : "linear-gradient(90deg, transparent, rgba(124,58,237,0.35), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2
            className="text-2xl font-black mb-4 tracking-tight gradient-text"
          >
            Abdul Basit
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400 transition-colors duration-300">
            MERN Stack Developer passionate about building modern,
            responsive, and user-friendly web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-bold mb-5 text-slate-900 dark:text-white transition-colors duration-300">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-sm text-slate-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200 flex items-center justify-center md:justify-start gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Me */}
        <div>
          <h3 className="text-base font-bold mb-5 text-slate-900 dark:text-white transition-colors duration-300">
            Follow Me
          </h3>
          <div className="flex justify-center md:justify-start gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xs"
                style={{
                  background: isDark ? "rgba(139,92,246,0.1)" : "#ffffff",
                  border: isDark
                    ? "1px solid rgba(139,92,246,0.25)"
                    : "1px solid rgba(203, 213, 225, 0.9)",
                  color: isDark ? "#a78bfa" : "#6d28d9",
                }}
                onMouseEnter={(e) => {
                  if (isDark) {
                    e.currentTarget.style.background = "rgba(139,92,246,0.3)";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(139,92,246,0.4)";
                  } else {
                    e.currentTarget.style.background = "#7c3aed";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "#7c3aed";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(124,58,237,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (isDark) {
                    e.currentTarget.style.background = "rgba(139,92,246,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  } else {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.color = "#6d28d9";
                    e.currentTarget.style.borderColor = "rgba(203, 213, 225, 0.9)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5 text-center text-xs text-slate-500"
        style={{
          borderColor: isDark
            ? "rgba(139,92,246,0.1)"
            : "rgba(203, 213, 225, 0.8)",
        }}
      >
        <p className="flex items-center justify-center gap-1.5 flex-wrap">
          © {new Date().getFullYear()} Abdul Basit — Made with
          <FaHeart className="text-purple-500" />
          using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
