import Contact from '@/container/Contact/Contact'
import Experience from '@/container/Experience/Experience'
import HomePage from '@/container/HomePage/HomePage'
import Projects from '@/container/Projects/Projects'
import Skills from '@/container/Skills/Skills'

export default function Home() {
  return (
    <main
      className="bg-gradient-to-b from-gray-300 to-white"
    >
      <HomePage />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
