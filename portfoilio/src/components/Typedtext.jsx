import React from 'react'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Typedtext = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["MERN Stack Developer", "Web Developer", "Frontend Developer"],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
        I'm a{" "}
        <span
          ref={textRef}
          className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent drop-shadow-sm"
        />
      </h2>
    </div>
  );
};

export default Typedtext;
