"use client"
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from "@/components/LottieAnimation/LottieJSON/404.json"

const NotFound = () => {
    return (
        <div className='min-h-screen flex items-center w-full justify-center'>
            <Player
                autoplay
                loop
                src={animation}
                style={{ height: '300px', width: '300px' }}
            >
            </Player>
        </div>
    )
}

export default NotFound