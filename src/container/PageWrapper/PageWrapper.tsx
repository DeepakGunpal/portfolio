"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 50 }} // Slide in from the right
                animate={{ opacity: 1, x: 0 }} // Animation when entering
                exit={{ opacity: 0, x: -50 }} // Slide out to the left
                transition={{ delay: 1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageWrapper