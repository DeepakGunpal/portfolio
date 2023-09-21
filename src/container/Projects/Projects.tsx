"use client"
import LottieAnimation from '@/components/LottieAnimation/LottieAnimation'
import React from 'react'
import underConstructionAnimation from "@/assets/LottieJSON/underConstructionAnimation.json"

const Projects = () => {
    return (
        <div className="flex sm:flex-row flex-col-reverse min-h-screen items-center justify-around p-2" id="projects">
            <h1>Projects</h1>
            <LottieAnimation animation={underConstructionAnimation} />
        </div>
    )
}

export default Projects