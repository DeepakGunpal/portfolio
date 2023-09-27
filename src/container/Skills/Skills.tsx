"use client"
import React, { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import SkillsGrid from '@/components/SkillsGrid/SkillsGrid';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import developer from '@/assets/LottieJSON/developer.json';
import LottieAnimation from '@/components/LottieAnimation/LottieAnimation';

const skills = [
    'TypeScript',
    'Nextjs 13',
    'Prompt Engg.',
    'JavaScript',
    'MongoDb',
    'Express',
    'React',
    'Node',
    'Redux',
    'Recoil',
    'Chrome Ext. V3',
    'Web Scrapping',
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwind',
];

const size = 100;
const gap = 15;

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

const Skills = () => {
    const [active, setActive] = useState({ index: 0 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    return (
        <>
            <PageWrapper>
                <div className="flex flex-col min-h-screen w-screen items-center justify-center p-2 gap-2" id="skills">
                    <h1 className="font-bold text-3xl tracking-wide mt-16">Skills</h1>
                    <motion.div
                        className="flex flex-col-reverse md:flex-col-reverse lg:flex-row w-full items-center justify-around gap-4"
                    >
                        <motion.div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: gap + 'px',
                                width: '100%',
                                maxWidth: (size + gap) * 4 - gap + 'px', // Adjust the maximum width as needed
                                perspective: 500,
                            }}
                            className='justify-center'
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={index}
                                >
                                    <SkillsGrid
                                        x={x}
                                        y={y}
                                        active={active}
                                        setActive={setActive}
                                        index={index}
                                        key={index}
                                        skill={skill}
                                        size={size}
                                        gap={gap}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                        <LottieAnimation animation={developer} animationName={'developer'} />
                    </motion.div>
                </div>
            </PageWrapper>
        </>
    );
};

export default Skills;
