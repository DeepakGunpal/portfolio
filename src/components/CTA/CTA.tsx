import React from 'react'
import { Button } from '@/components/ui/button'
import state from '@/valtio/store'
import { motion } from "framer-motion"

const CTA = () => {
    return (
        <div className='flex gap-4 justify-center'>
            <motion.div
                className="flex justify-center"
                whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <a href={"https://drive.google.com/file/d/1vRhus2TgZ3Ba4vi28oL7yU2vxJbIwDbh/view?usp=sharing"} target='_blank' rel="noreferrer"><Button>CV</Button></a>
            </motion.div>
            <motion.div
                className="flex justify-center"
                whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Button onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    state.activeTab = "#contact"
                }}>Let&apos;s Talk</Button>
            </motion.div>
        </div>
    )
}

export default CTA