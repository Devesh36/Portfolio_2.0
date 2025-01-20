'use client'
import { motion } from 'framer-motion'
import { FaReact, FaNode, FaPython, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si'
import Skills3D from '../Skills3D/Skills3D'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    ],
    backend: [
      { name: 'Node.js', icon: FaNode, color: '#539E43' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQL', icon: FaDatabase, color: '#336791' },
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    ]
  }

  return (
    <section id="skills" className="py-16 bg-[#0a0a0a] relative overflow-hidden">
      <Skills3D />
      {/* Animated Background decoration */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #4f46e5 0%, transparent 70%)",
            "radial-gradient(circle at 80% 80%, #7c3aed 0%, transparent 70%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.div 
          className="absolute top-20 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 rounded-full"
            whileInView={{
              width: ["0%", "100%"]
            }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Skills Categories */}
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <SkillCategory title="Frontend" skills={skills.frontend} />
          <SkillCategory title="Backend" skills={skills.backend} />
          <SkillCategory title="Tools" skills={skills.tools} />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <SkillStat number="500+" text="Hours Coded" />
          <SkillStat number="100+" text="Commits" />
          <SkillStat number="20+" text="Projects" />
          <SkillStat number="4+" text="Freelance Projects" />
        </motion.div>
      </div>
    </section>
  )
}

const SkillCategory = ({ title, skills }) => (
  <motion.div
    variants={itemVariants}
  >
    <motion.h3 
      className="text-xl font-medium mb-6 text-center text-gray-200"
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h3>
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      variants={containerVariants}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            rotate: [0, 2, -2, 0],
            transition: { duration: 0.3 }
          }}
          className="group relative bg-[#111111]/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800/30 hover:border-blue-500/30"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <skill.icon 
                className="w-6 h-6 relative z-10" 
                style={{ color: skill.color }} 
              />
            </motion.div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
)

const SkillStat = ({ number, text }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    className="group text-center p-4 bg-[#111111]/50 backdrop-blur-sm rounded-xl border border-gray-800/30 hover:border-blue-500/30"
  >
    <motion.div 
      className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {number}
    </motion.div>
    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{text}</div>
  </motion.div>
)

export default Skills
