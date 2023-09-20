import HomePageModel from '@/components/HomePageModel/HomePageModel'
import avatar from "@/assets/3.jpg"
import Image from 'next/image'

export default function HomePage() {
    return (
        <div className="flex flex-col sm:flex-row min-h-screen w-full items-center justify-around p-2">
            <HomePageModel />
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
