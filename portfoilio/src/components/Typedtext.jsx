import React from 'react'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
const Typedtext = () => {

    const textRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(textRef.current, {
            strings: ["MERN stack Developer" , "Web Developer" , "Frontend Developer"],
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
   <h1 className='text-3xl md:text-4xl font-bold text-white'>
    I'm a {" "}

    <span ref={textRef} 
              className='bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md'
    ></span>
   </h1>
   </div>
  );
};

export default Typedtext;
