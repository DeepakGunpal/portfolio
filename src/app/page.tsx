import HomePageModel from '@/container/HomePageModel/HomePageModel'
import avatar from "@/assets/2.jpg"
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around p-2 bg-gradient-to-br from-pink-300 via-transparent to-blue-300">
      <HomePageModel />
      <Image src={avatar} alt='ai-avatar' width={300} height={425} className='rounded-lg' />
    </main>
  )
}
