"use client"
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import notFound from "@/assets/LottieJSON/404.json"
import LottieAnimation from '@/components/LottieAnimation/LottieAnimation';

const NotFound = () => {
    return (
        <div className='min-h-screen flex items-center w-full justify-center'>
            <LottieAnimation animation={notFound} />
        </div>
    )
}

export default NotFound