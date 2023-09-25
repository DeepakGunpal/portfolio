"use client"
import React, { Dispatch, useState } from 'react';
import "./Projects.css"
import Carousel from '../../components/Carousel/Carousel';
import { MinimizeIcon } from '@/Svgs/Svgs';
import Tabs from '@/components/Tabs/Tabs';
import { motion, AnimatePresence } from "framer-motion";
type props = {
    items: string[],
    isOpen: boolean,
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
}
const tabs = [{ label: "", icon: "" }]

const Projects = ({ items, isOpen, setIsOpen }: props) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <motion.div
            layout
            className={`card ${isOpen ? "w-4/5" : "w-1/3"} h-full flex flex-col overflow-hidden rounded-md items-center justify-between relative project_tabs`}
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
            <nav className="bg-gray-100 p-2 rounded-tl-md rounded-tr-md border-none h-12">
                <ul>
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={item === selectedTab ? "selected" : ""}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}tabs
                            {item === selectedTab ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <section className='flex justify-center items-center grow select-none' onClick={() => setIsOpen(true)}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Carousel />
                    </motion.div>
                </AnimatePresence>
            </section>
        </motion.div>
    );
};

export default Projects;
