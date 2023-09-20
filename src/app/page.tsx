import Experience from '@/container/Experience/Experience'
import HomePage from '@/container/HomePage/HomePage'
import Skills from '@/container/Skills/Skills'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-pink-300 via-transparent to-blue-300">
      <HomePage />
      <Skills />
      <Experience />
    </main>
  )
}
