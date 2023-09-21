"use client"
import LottieAnimation from '@/components/LottieAnimation/LottieAnimation'
import React from 'react'
import underConstructionAnimation from "@/assets/LottieJSON/underConstructionAnimation.json"

const Experience = () => {
    return (
        <div className="flex sm:flex-row flex-col-reverse min-h-screen items-center justify-around p-2" id="experience">
            <h1>Experience</h1>
            <LottieAnimation animation={underConstructionAnimation} />
        </div>
    )
}

export default Experience