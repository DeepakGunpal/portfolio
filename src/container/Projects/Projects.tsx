"use client"
import React, { Dispatch, useState } from 'react';
import "./Projects.css"
import Carousel from '../../components/Carousel/Carousel';
import { EnterFullScreen, ExitFullScreen } from '@/Svgs/Svgs';
import { motion, AnimatePresence } from "framer-motion";
import { projects } from '@/data/projectsData';

type props = {
    isOpen: boolean,
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

const Projects = ({ isOpen, setIsOpen }: props) => {
    const [selectedYear, setSelectedYear] = useState(Object.keys(projects).reverse()[0]);

    return (
        <motion.div
            layout
            className={`card ${isOpen ? "w-4/5" : "w-1/3"} h-full flex flex-col overflow-hidden rounded-md items-center justify-between relative project_tabs`}
        >
            <motion.div
                whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 4px gray"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className='absolute top-4 right-4'
                onClick={() => { isOpen ? setIsOpen(false) : setIsOpen(true) }}
            >
                {isOpen ? <ExitFullScreen /> : <EnterFullScreen />}
            </motion.div>
            <nav className="bg-gray-100 p-2 rounded-tl-md rounded-tr-md border-none h-12">
                <ul>
                    {Object.keys(projects).reverse().map((year) => (
                        <li
                            key={year}
                            className={year === selectedYear ? "selected" : ""}
                            onClick={() => setSelectedYear(year)}
                        >
                            {year}
                            {year === selectedYear ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <section className='flex justify-center items-center grow select-none'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedYear ? selectedYear : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Carousel projects={projects[selectedYear]} isOpen={isOpen} setIsOpen={setIsOpen} />
                    </motion.div>
                </AnimatePresence>
            </section>
        </motion.div>
    );
};

export default Projects;
