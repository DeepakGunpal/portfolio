"use client"
import SocialLinks from '@/components/SocialLinks/SocialLinks'
import state from '@/valtio/store'
import { motion } from 'framer-motion'
import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col h-fit items-center justify-around p-2 gap-4" id="footer">
            <motion.div
                className='text-3xl font-bold text-transparent bg-clip-text bg-black cursor-pointer' whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 2px black"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => {
                    document.getElementById("#")?.scrollIntoView({ behavior: "smooth" })
                    state.activeTab = "/"
                }}
            >
                <h1>Deepak Gunpal</h1>
            </motion.div>
            <SocialLinks />
            <p>© Deepak Gunpal. All rights reserved</p>
        </div>
    )
}

export default Footer