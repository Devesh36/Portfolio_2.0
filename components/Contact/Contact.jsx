'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again later.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'deveshrathod047@gmail.com',
      link: 'mailto:deveshrathod047@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '7397901565',
      link: 'tel:7397901565'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Mumbai, India',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px]" />
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
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.link}
                className="flex items-start gap-4 p-6 bg-[#111111] rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-blue-500/10 p-4 rounded-lg">
                  <info.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                  <p className="text-gray-400">{info.content}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="p-6 bg-[#111111] rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <SocialLink href="https://github.com/devesh36" icon={FaGithub} />
                <SocialLink href="https://www.linkedin.com/in/devesh-rathod-3a680024a" icon={FaLinkedin} />
                <SocialLink href="https://x.com/devesh__31" icon={FaTwitter} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <InputField
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <div className="relative">
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#111111] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
                <div className="absolute bottom-4 right-4 text-gray-400 text-sm">
                  {formData.message.length}/500
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-500 text-white px-8 py-4 rounded-2xl hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Add status message */}
              {status.message && (
                <div className={`mt-4 p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const InputField = ({ type, name, placeholder, value, onChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full px-6 py-4 bg-[#111111] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
    required
  />
)

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-500/10 p-4 rounded-lg hover:bg-blue-500/20 transition-colors"
  >
    <Icon className="w-6 h-6 text-blue-500" />
  </a>
)

export default Contact