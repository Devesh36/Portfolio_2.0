'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: "Go With Leads",
      description: "A comprehensive lead generation platform designed to help businesses grow their customer base through targeted marketing and automated lead capture systems.",
      image: "/gowithlead.jpeg",
      type: "Freelance Project",
      duration: "3 months",
      liveLink: "https://www.gowithlead.com",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: FaReact },
        { name: "MongoDB", icon: SiMongodb },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss }
      ]
    },
    {
      title: "Legal Consultio",
      description: "A professional legal consultation platform connecting clients with expert lawyers, featuring real-time consultation booking and case management.",
      image: "/legal1.jpeg",
      type: "Freelance Project",
      duration: "2 months",
      liveLink: "https://www.legalconsultio.com",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Firebase", icon: SiFirebase },
        { name: "Tailwind CSS", icon: SiTailwindcss }
      ]
    },
    {
      title: "AI Form Generation",
      description: "An innovative AI-powered form builder that allows users to create customized forms in seconds. Features include rapid form generation, seamless customization, AI integration, and instant form sharing capabilities.",
      image: "/aiform.jpeg",
      type: "Personal Project",
      duration: "1 month",
      liveLink: "https://ai-form-builder-iota.vercel.app/",
      githubLink: "https://github.com/Devesh36/AI_FORM_BUILDER",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss }
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-0 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my best work, including freelance projects and personal developments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#111111] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Project Image */}
        <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent lg:bg-gradient-to-l" />
        </div>

        {/* Project Info */}
        <div className="lg:w-1/2 p-8 lg:p-12">
          <div className="mb-4">
            <span className="px-4 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">
              {project.type}
            </span>
            <span className="ml-4 text-gray-400">
              {project.duration}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-400 mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-8">
            <h4 className="text-sm text-gray-400 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1 rounded-full"
                >
                  <tech.icon className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-700 px-6 py-2 rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects