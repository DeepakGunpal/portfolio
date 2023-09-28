"use client"
import React, { useState } from 'react';
import "./Projects.css"
import { InfoIcon } from '@/Svgs/Svgs';
import { projects } from '@/data/projectsData';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from 'framer-motion'

const Projects = () => {
    const [selectedYear, setSelectedYear] = useState("2023")
    return (
        <PageWrapper>
            <section className='min-h-screen w-screen flex flex-col gap-8 pt-24' id='projects'>
                <div className='flex justify-center gap-8'>
                    {Object.keys(projects).reverse().map(year => (
                        <Button key={year} onClick={() => setSelectedYear(year)}>{year}</Button>
                    ))}
                </div>
                <div className='flex flex-row flex-wrap gap-8 justify-center items-center'>
                    {
                        projects && projects[selectedYear].map(project => (
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    textShadow: "0px 0px 4px gray"
                                }}
                                whileTap={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                key={project?.id} className='card bg-gradient-to-br from-pink-300 via-violet-400 to-blue-300 w-4/5 md:w-2/5 lg:w-1/5 h-80 flex flex-col gap-3 relative'
                            >
                                {/* <div > */}
                                <Image src={project?.img} alt={project?.title} width={250} height={250} className='rounded-md object-center w-96 h-96' />
                                <div className='flex flex-col gap-2 p-2 rounded-md'>
                                    <h2 className='font-bold'>{project?.title}</h2>
                                    <p><b>Status:</b> {project?.status}</p>
                                    <span className='flex gap-8'>
                                        {project?.github && <Link href={project?.github} target='_blank' rel='noopener'>
                                            <Button>GitHub</Button>
                                        </Link>}
                                        {project?.link && <Link href={project?.link} target='_blank' rel='noopener'>
                                            <Button>Live</Button>
                                        </Link>}
                                    </span>
                                    <span className='absolute bottom-1 right-2'>

                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Popover>
                                                        <PopoverTrigger>
                                                            <InfoIcon />
                                                        </PopoverTrigger>
                                                        <PopoverContent side='left' className='w-[300px] h-[600px] flex flex-col gap-4 bg-gradient-to-br from-pink-300 via-violet-400 to-blue-300 overflow-y-scroll'>
                                                            <h2 className='font-bold text-lg'>{project?.title}</h2>
                                                            {project?.context && <p><b>Context: </b> {project?.context}</p>}
                                                            {project?.tech && <p><b>Tech Stack: </b> {project?.tech.join(", ")}</p>}
                                                            {project?.description && <p><b>Description:</b> {project?.description}</p>}
                                                            {project?.contributions && <p><b>My Contributions:</b> {project?.contributions.map((c, i) => (
                                                                <p key={i} className='mb-4'>* {c}</p>
                                                            ))}</p>}
                                                            {project?.status && <p><b>Status:</b> {project?.status}</p>}
                                                        </PopoverContent>
                                                    </Popover></TooltipTrigger>
                                                <TooltipContent side='left'>
                                                    <p>Know More</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </span>
                                </div>
                                {/* </div> */}
                            </motion.div>
                        ))
                    }
                </div>
            </section>
        </PageWrapper>
    );
};

export default Projects;
