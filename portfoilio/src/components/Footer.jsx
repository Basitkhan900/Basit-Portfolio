import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";

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
  return (
    <footer
      className="relative overflow-hidden mt-20"
      style={{ borderTop: "1px solid rgba(139,92,246,0.15)" }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2
            className="text-2xl font-black mb-4 tracking-tight"
            style={{
              background: "linear-gradient(135deg,#a855f7,#6366f1,#60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Abdul Basit
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            MERN Stack Developer passionate about building modern,
            responsive, and user-friendly web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-bold mb-5 text-white">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center justify-center md:justify-start gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Me */}
        <div>
          <h3 className="text-base font-bold mb-5 text-white">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{
                  background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  color: "#a78bfa",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,92,246,0.3)"; e.currentTarget.style.boxShadow = "0 0 16px rgba(139,92,246,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(139,92,246,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5 text-center text-xs text-gray-500"
        style={{ borderColor: "rgba(139,92,246,0.1)" }}
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