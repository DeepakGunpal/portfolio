import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from "./LottieJSON/hi.json"


const Hi = () => {
    return (
        <Player
            autoplay
            loop
            src={animation}
            style={{ height: '300px', width: '300px' }}
        >
        </Player>
    )
}

export default Hi