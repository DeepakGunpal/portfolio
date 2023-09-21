import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

type props = {
    animation: object,
    height?: string,
    width?: string,
}

const LottieAnimation = ({ animation, height = "300px", width = "300px" }: props) => {
    return (
        <Player
            autoplay
            loop
            src={animation}
            style={{ height, width }}
        >
        </Player>
    )
}

export default LottieAnimation