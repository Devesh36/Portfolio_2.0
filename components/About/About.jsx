'use client'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaMobile, FaServer } from 'react-icons/fa'

const About = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern technologies.',
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-500/10'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with great user experience.',
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-500/10'
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications for iOS and Android.',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-500/10'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Building scalable server-side applications and APIs.',
      colorClass: 'text-orange-500',
      bgClass: 'bg-orange-500/10'
    }
  ]

  return (
    <section id="about" className="py-20 bg-[#0a0a0a] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px]" />
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
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in creating beautiful 
            and functional web applications. I specialize in building modern, responsive 
            websites and applications using cutting-edge technologies.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          <StatCard number="2+" text="Years Experience" />
          <StatCard number="20+" text="Projects Completed" />
          <StatCard number="5+" text="Happy Clients" />
          <StatCard number="2+" text="Awards Won" />
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-lg ${service.bgClass} flex items-center justify-center mb-6`}>
                <service.icon className={`w-7 h-7 ${service.colorClass}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey/Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-10">My Journey</h3>
          <div className="space-y-8">
            <TimelineItem 
              year="2025"
              title="SWE Intern"
              company="Adani"
              description=""
            />
            <TimelineItem 
              year="2022"
              title="Computer Engineering"
              company="Terna Engineering College"
              description=""
            />
            <TimelineItem 
              year="2022"
              title="HSC"
              company="Pg Junior College of Science"
              description=""
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const StatCard = ({ number, text }) => (
  <div className="text-center p-6 bg-[#111111] rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
    <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{number}</div>
    <div className="text-gray-400">{text}</div>
  </div>
)

const TimelineItem = ({ year, title, company, description }) => (
  <div className="flex gap-6">
    <div className="text-blue-500 font-bold whitespace-nowrap">{year}</div>
    <div className="relative flex-1 bg-[#111111] p-6 rounded-2xl">
      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full" />
      <h4 className="text-xl font-bold mb-1">{title}</h4>
      <div className="text-blue-500 mb-2">{company}</div>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
)

export default About