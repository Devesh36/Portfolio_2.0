'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Skills3D = () => {
  const [particles, setParticles] = useState([])
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Generate random positions only on the client side
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * (window.innerWidth || 1000),
      y: Math.random() * -100,
    }))
    setParticles(newParticles)
    setWindowWidth(window.innerWidth)

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60" />
      
      {/* Animated Circles */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
      </motion.div>

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ opacity: 0, y: particle.y, x: particle.x }}
          animate={{
            opacity: [0, 1, 0],
            y: [particle.y, particle.y - 100],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

export default Skills3D
