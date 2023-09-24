import Contact from '@/container/Contact/Contact'
import Experience from '@/container/Experience/Experience'
import Footer from '@/container/Footer/Footer'
import HomePage from '@/container/HomePage/HomePage'
import Skills from '@/container/Skills/Skills'

export default function Home() {
  return (
    <main
      className="bg-gradient-to-b from-gray-300 to-white"
    >
      <HomePage />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
