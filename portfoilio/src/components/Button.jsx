import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
      relative overflow-hidden inline-flex items-center justify-center px-1 py-4 min-w-[124px] min-h-[50px] tracking-widest text-blue-100

      bg-gradient-to-tr from-[#0b1b3d] to-[#08142b]
      shadow-xl

      transition-all duration-300 ease-in-out
      hover:shadow-blue-500/40
      hover:-translate-y-1

      focus:outline-none
      group
      box-border mt-4
      "
    >
      {title}

      {/* Top */}
      <span className="pointer-events-none absolute top-0 left-0 w-full h-[2px] bg-gradient-to-l from-transparent to-blue-500 animate-[slideX_2s_linear_infinite]" />

      {/* Right */}
      <span className="pointer-events-none absolute top-0 right-0 w-[2px] h-full bg-gradient-to-t from-transparent to-blue-500 animate-[slideY_2s_linear_-1s_infinite]" />

      {/* Bottom */}
      <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-blue-500 animate-[slideXReverse_2s_linear_infinite]" />

      {/* Left */}
      <span className="pointer-events-none absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent to-blue-500 animate-[slideYReverse_2s_linear_-1s_infinite]" />

      {/* Glow */}
      <span className="pointer-events-none absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity" />
    </button>
  );
};

export default Button;