"use client"
import HomePageModel from '@/components/HomePageModel/HomePageModel'
import avatar from "@/assets/3.jpg"
import Image from 'next/image'
import { useTypewriter } from 'react-simple-typewriter'

const skills: string[] = ["Full Stack Developer", "MERN Stack Developer", "Nextjs Developer", "TypeScript Developer"]

export default function HomePage() {
    const [text] = useTypewriter({
        words: skills,
        loop: true,
        delaySpeed: 1000
    })
    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-center p-2 pt-40">
            <div className='w-2/6 h-12 flex flex-row gap-2 p-2 rounded-2xl bg-gradient-to-br from-pink-300 via-purple-400 to-blue-300 px-12'>
                <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-black'>Hello I&apos;m </h1>
                <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-black'> {text}</h1>
            </div>
            <div className='flex flex-col sm:flex-row w-full items-center justify-around'>
                <HomePageModel />
                <Image
                    src={avatar}
                    alt="ai-avatar"
                    width={300}
                    height={425}
                    className="rounded-full mt-4 sm:mt-0"
                />
            </div>
        </div>
    )
}
