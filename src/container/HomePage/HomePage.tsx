"use client"
import avatar from "@/assets/3.jpg"
import Image from 'next/image'
import { useTypewriter } from 'react-simple-typewriter'
import LottieAnimation from '@/components/LottieAnimation/LottieAnimation'
import Hi from "@/assets/LottieJSON/hi.json"
import SocialLinks from '@/components/SocialLinks/SocialLinks'
import CTA from "@/components/CTA/CTA"

const skills: string[] = ["Deepak Gunpal", "Full Stack Developer", "MERN Stack Developer", "Nextjs Developer", "TypeScript Developer"]

export default function HomePage() {
    const [text] = useTypewriter({
        words: skills,
        loop: true,
        delaySpeed: 1000
    })
    return (
        <div className="flex flex-col sm:flex-row min-h-screen w-full items-center justify-evenly p-2 pt-30" id="#">
            <div className='flex w-1/3 flex-col gap-6 p-2 justify-center h-full'>
                <LottieAnimation animation={Hi} />
                <div className='w-full h-14 flex flex-row gap-2 p-2 rounded-2xl px-12'>
                    <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-black'>I&apos;m </h1>
                    <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-black'> {text}</h1>
                </div>
                <SocialLinks />
                <CTA />
            </div>
            <Image
                src={avatar}
                alt="ai-avatar"
                width={300}
                height={425}
                className="rounded-full mt-4 sm:mt-0"
            />
        </div>
    )
}
