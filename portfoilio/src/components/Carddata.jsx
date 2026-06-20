import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'

const Carddata = ({ data }) => {
  return (
    <div className="relative overflow-hidden py-24 px-6">
      
      {/* Background Orbs */}
      <div className="orb orb-blue" style={{ width: 600, height: 600, top: "20%", left: "-200px", opacity: 0.15 }} />
      <div className="orb orb-purple" style={{ width: 500, height: 500, bottom: "10%", right: "-150px", opacity: 0.15 }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase"
            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.35)", color: "#c084fc" }}
          >
            ✦ Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Featured{" "}
            <span style={{ background: "linear-gradient(135deg,#a855f7,#6366f1,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              disc={item.disc}
              live={item.live}
              githubLink={item.co}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carddata
