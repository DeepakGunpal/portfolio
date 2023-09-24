"use client"
import React, { Dispatch, useState } from 'react';
import "./Projects.css"
import { motion } from 'framer-motion';
import Carousel from '../Carousel/Carousel';
import { MinimizeIcon } from '@/Svgs/Svgs';

type props = {
    items: string[],
    isOpen: boolean,
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

const Projects = ({ items, isOpen, setIsOpen }: props) => {

    return (
        <motion.div
            layout
            className={`card ${isOpen ? "w-4/5" : "w-1/3"} h-full flex overflow-hidden rounded-md items-center justify-between relative`}
        >
            {isOpen && <motion.div
                whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 4px gray"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className='absolute top-4 right-4'
                onClick={() => setIsOpen(false)}
            >
                <MinimizeIcon />
            </motion.div>}
            <div
                onClick={() => setIsOpen(true)}
                className='w-full h-full flex items-center justify-center'
            > <Carousel />
            </div>
        </motion.div>
    );
};

export default Projects;
