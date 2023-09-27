"use client"
import React, { useState } from 'react';
import "./Projects.css"
import { EnterFullScreen, ExitFullScreen } from '@/Svgs/Svgs';
import { motion, AnimatePresence } from "framer-motion";
import { projects } from '@/data/projectsData';

const Projects = () => {

    return (
        <section className='min-h-screen w-screen mt-4 flex justify-center items-center' id='projects'>
            Loading Projects...
        </section>
    );
};

export default Projects;
