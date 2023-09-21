import Contact from '@/container/Contact/Contact'
import Experience from '@/container/Experience/Experience'
import HomePage from '@/container/HomePage/HomePage'
import Projects from '@/container/Projects/Projects'
import Skills from '@/container/Skills/Skills'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-pink-300 via-transparent to-blue-300">
      <HomePage />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
