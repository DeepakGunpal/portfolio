"use client"
import React from 'react'
import { motion, useScroll } from "framer-motion";
import "./ScrollAnimation.css"

const ScrollAnimation = () => {
    const { scrollYProgress } = useScroll({ axis: "x" });

    return (
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
            />
        </svg>
    )
}

export default ScrollAnimation