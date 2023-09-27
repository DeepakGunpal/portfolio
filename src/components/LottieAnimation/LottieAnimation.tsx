import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

type props = {
    animation: object,
    animationName: string,
}

const LottieAnimation = ({ animation, animationName }: props) => {

    let className = ``
    if (animationName === "developer") className = 'w-[300px] sm:w-[600px] h-[300px] sm:h-[500px]'
    else className = 'w-[300px] h-[300px]'
    return (
        <Player
            autoplay
            loop
            src={animation}
            className={`${className}`}
        >
        </Player>
    )
}

export default LottieAnimation