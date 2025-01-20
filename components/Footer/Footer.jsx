import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#111111] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <SocialLink href="https://github.com/devesh36" icon={FaGithub} />
            <SocialLink href="https://www.linkedin.com/in/devesh-rathod-3a680024a" icon={FaLinkedin} />
            <SocialLink href="https://x.com/devesh__31" icon={FaTwitter} />
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Devesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-blue-500 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-6 h-6" />
  </a>
)

export default Footer