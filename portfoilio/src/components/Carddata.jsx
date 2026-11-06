import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Carddata = ({ data }) => {
  const { isDark } = useTheme();

  return (
    <div
      className="relative overflow-hidden py-24 px-6 transition-colors duration-300 bg-slate-200/25 dark:bg-transparent border-y border-slate-300/40 dark:border-transparent"
    >
      {/* Background Orbs */}
      <div
        className="orb orb-blue"
        style={{ width: 600, height: 600, top: "20%", left: "-200px" }}
      />
      <div
        className="orb orb-purple"
        style={{ width: 500, height: 500, bottom: "10%", right: "-150px" }}
      />

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
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase transition-colors"
            style={{
              background: isDark ? "rgba(139,92,246,0.15)" : "rgba(124,58,237,0.08)",
              border: isDark ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(124,58,237,0.22)",
              color: isDark ? "#c084fc" : "#6d28d9",
              boxShadow: isDark ? "none" : "0 2px 8px rgba(124,58,237,0.06)",
            }}
          >
            ✦ Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight transition-colors duration-300">
            Featured{" "}
            <span
              style={{
                background: isDark
                  ? "linear-gradient(135deg,#a855f7,#6366f1,#60a5fa)"
                  : "linear-gradient(135deg,#7c3aed,#4f46e5,#2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <Card
              key={item.id}
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
