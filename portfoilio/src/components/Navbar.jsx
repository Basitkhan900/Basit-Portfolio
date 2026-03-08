import React, { useState } from "react";
import logo from "../assets/images/portfolio logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black/50 text-amber-50 sticky top-0 z-50">

      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        
        <img src={logo} className="h-10 w-10" alt="logo" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/skill">Skills</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="border px-4 py-1 rounded hover:bg-amber-500 hover:text-black">
            Login
          </button>
          <button className="border px-4 py-1 rounded hover:bg-amber-500 hover:text-black">
            Sign Up
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col bg-black/95 px-6 py-5 space-y-4 text-center font-medium">

          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/About">About</Link>
          <Link onClick={() => setOpen(false)} to="/skill">Skills</Link>
          <Link onClick={() => setOpen(false)} to="/Projects">Projects</Link>
          <Link onClick={() => setOpen(false)} to="/Contact">Contact</Link>

          <div className="flex justify-center gap-4 pt-4 border-t border-gray-600">

            <button className="border px-4 py-1 rounded">
              Login
            </button>

            <button className="border px-4 py-1 rounded">
              Sign Up
            </button>c

          </div>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;