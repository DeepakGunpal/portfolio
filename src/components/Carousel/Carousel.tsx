import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "./Carousel.css";
import { TriangleLeftIcon, TriangleRightIcon } from "@/Svgs/Svgs";
import { Project } from "../../../types";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import { Button } from "../ui/button";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

interface CarouselProps {
    projects: Project[];
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Carousel = ({ projects, isOpen, setIsOpen }: CarouselProps) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const projectIndex = wrap(0, projects.length, page);
    const project = projects[projectIndex];
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0, bottom: 0, top: 2 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="text-md w-4/5"
                >
                    <div className={`flex gap-4 h-4/5 ${isOpen ? "flex-row" : "flex-col"}`}>
                        <Image src={project?.img} alt={"project image"} width={250} height={350} className="rounded-md object-cover" />
                        <div className="flex flex-col gap-2">
                            <h2>{project?.title}</h2>
                            <p>Context: {project?.context}</p>
                            <span className="flex gap-4">
                                {isOpen && <p>{project?.description}</p>}
                                {project.github && <Link href={project.github as Url} target="_blank" rel="noreferrer">
                                    <Button>GitHub</Button>
                                </Link>}
                                {project.link && <Link href={project.link as Url} target="_blank" rel="noreferrer">
                                    <Button>Live</Button>
                                </Link>}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <motion.div
                whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 4px gray"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="next" onClick={() => paginate(1)}
            >
                <TriangleRightIcon />
            </motion.div>
            <motion.div
                whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 4px gray"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="prev" onClick={() => paginate(-1)}
            >
                <TriangleLeftIcon />
            </motion.div>
        </>
    );
}

export default Carousel

