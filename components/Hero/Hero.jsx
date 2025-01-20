'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 sm:py-20 relative overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
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
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500/10 text-blue-500 rounded-full text-sm sm:text-base font-medium tracking-wide">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Devesh
              </span>
            </motion.h1>

            <motion.p 
              className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A passionate Full Stack Developer crafting elegant solutions through code. 
              Specializing in building exceptional digital experiences that combine innovation with user-centric design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity font-medium"
              >
                Get In Touch
              </a>
              <a 
                href="/Devesh_Resume.pdf" 
                className="px-8 py-4 bg-[#1a1a1a] rounded-full hover:bg-[#222] transition-colors flex items-center gap-2 font-medium group"
                download
              >
                <HiDownload className="text-lg text-blue-500 group-hover:animate-bounce" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-6 sm:gap-8 justify-center lg:justify-start px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { icon: FaGithub, href: "https://github.com/Devesh36", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/devesh-rathod-3a680024a", label: "LinkedIn" },
                { icon: FaTwitter, href: "https://x.com/devesh__31", label: "Twitter" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-2xl text-gray-400 hover:text-blue-500 transition-colors p-2 hover:bg-blue-500/10 rounded-full"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Container */}
          <motion.div 
            className="lg:flex-1 order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-full border-2 border-blue-500/20 p-4">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                  <Image
                    src="/devesh1.jpeg" // Add your image
                    alt="Your Name"
                    fill
                    className="object-cover rounded-full p-4 grayscale hover:grayscale-0 transition-all duration-300"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -right-4 top-1/4 bg-[#1a1a1a] p-4 rounded-2xl shadow-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-blue-500 font-semibold">React.js</span>
              </motion.div>
              <motion.div
                className="absolute -left-4 bottom-1/4 bg-[#1a1a1a] p-4 rounded-2xl shadow-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-purple-500 font-semibold">Node.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero