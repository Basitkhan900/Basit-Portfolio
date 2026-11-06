import React, { useEffect, useRef } from 'react'
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
        {/*
          Use the CSS class .gradient-text which reads from --gt-main CSS variable.
          This variable updates atomically with the .dark class — no React state,
          no timing race, no gradient rectangle flash on theme toggle.
        */}
        <span ref={textRef} className="gradient-text" />
      </h2>
    </div>
  );
};

export default Typedtext;
