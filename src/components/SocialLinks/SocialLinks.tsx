import { GithubIcon, InstagramIcon, LinkedInIcon } from '@/Svgs/Svgs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const SocialLinks = () => {
    return (
        <div className='flex gap-4 w-full justify-center'>
            {/* Github */}
            <motion.div
                whileHover={{
                    scale: 1.3,
                    textShadow: "0px 0px 4px gray"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Link href="https://github.com/DeepakGunpal" target='_blank' rel="noreferrer">
                    <GithubIcon />
                </Link>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
                whileHover={{
                    scale: 1.3,
                    textShadow: "0px 0px 4px gray"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Link href="https://www.linkedin.com/in/deepak-gunpal-45186b233/" target='_blank' rel="noreferrer">
                    <LinkedInIcon />
                </Link>
            </motion.div>

            {/* Instagram */}
            <motion.div
                whileHover={{
                    scale: 1.3,
                    textShadow: "0px 0px 4px gray"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Link href="https://www.instagram.com/gunpal.deepak?r=nametag" target='_blank' rel="noreferrer">
                    <InstagramIcon />
                </Link>
            </motion.div>
        </div>
    )
}

export default SocialLinks