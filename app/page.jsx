'use client'
import dynamic from 'next/dynamic'

// Regular imports
import Navbar from '@/components/Navbar/Navbar'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
// Dynamic import for Hero component
// const Hero = dynamic(() => import('@/components/Hero/Hero'), {
//   ssr: false,
//   loading: () => <div>Loading...</div>
// })

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}