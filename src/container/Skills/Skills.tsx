"use client"
import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import SkillsGrid from "@/components/SkillsGrid/SkillsGrid";
import avatar from "@/assets/2.jpg"
import Image from "next/image";
import PageWrapper from "../PageWrapper/PageWrapper";

const grid = [
    ["TypeScript", "Nextjs 13", "Prompt Engg.", "JavaScript"],
    ["MongoDb", "Express", "React", "Node"],
    ["Redux", "Recoil", "Chrome Ext. V3", "Web Scrapping"],
    ["HTML", "CSS", "Bootstrap", "Tailwind"],
];
const size = 120;
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
            delay: 0.1 * index,
        },
    }),
};

const Skills = () => {
    const [active, setActive] = useState({ row: 0, col: 0 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    return (
        <>
            <PageWrapper>
                <div className="flex sm:flex-row flex-col-reverse min-h-screen items-center justify-around p-2" id="skills">
                    <Image src={avatar} alt='ai-avatar' width={300} height={425} className='rounded-full hidden sm:none md:none lg:block' />
                    <motion.div
                        animate={{ "--base-hue": 360 } as any}
                        initial={{ "--base-hue": 0 } as any}
                        exit={{ "--base-hue": 0 } as any}
                        transition={{ duration: 100, loop: Infinity, ease: "linear" }}
                        className="h-screen"
                    >
                        <motion.div
                            style={{
                                display: "flex",
                                width: (size + gap) * 4 - gap,
                                height: (size + gap) * 4 - gap,
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                position: "relative",
                                perspective: 500
                            }}
                        >
                            {grid.map((row, rowIndex) =>
                                row.map((skill, colIndex) => (
                                    <motion.div
                                        key={colIndex}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={colIndex}
                                    >
                                        <SkillsGrid
                                            x={x}
                                            y={y}
                                            active={active}
                                            setActive={setActive}
                                            rowIndex={rowIndex}
                                            colIndex={colIndex}
                                            key={rowIndex + colIndex}
                                            skill={skill}
                                        /></motion.div>
                                ))
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </PageWrapper>
        </>
    )
}

export default Skills