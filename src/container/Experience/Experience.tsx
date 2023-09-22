"use client"
import LottieAnimation from '@/components/LottieAnimation/LottieAnimation'
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import Image from 'next/image'
import React from 'react'
import underConstructionAnimation from "@/assets/LottieJSON/underConstructionAnimation.json"

const Experience = () => {
    return (
        <PageWrapper>
            <div className='h-screen flex flex-col justify-center gap-8' id="experience">
                <div className='flex justify-center'><h1 className='font-bold text-3xl tracking-wide'>Experience</h1></div>
                <div className="flex sm:flex-row flex-col-reverse h-3/5 items-center justify-around p-2 gap-6">
                    <div className='card w-1/3 h-full'>
                        <LottieAnimation animation={underConstructionAnimation} />
                    </div>
                    <div className='w-1/3 h-full flex gap-4'>
                        <div className='card w-full h-full'></div>
                        <div className='card w-full h-full'></div>
                    </div>
                </div>


            </div>
        </PageWrapper>
    )
}

export default Experience