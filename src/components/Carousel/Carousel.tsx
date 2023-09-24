import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "./Carousel.css";
import { TriangleLeftIcon, TriangleRightIcon } from "@/Svgs/Svgs";
import LottieAnimation from "../LottieAnimation/LottieAnimation";
import underConstructionAnimation from "@/assets/LottieJSON/underConstructionAnimation.json"

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

const items = [<LottieAnimation key={0} animation={underConstructionAnimation} />, <LottieAnimation key={1} animation={underConstructionAnimation} />]

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const Carousel = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const itemIndex = wrap(0, items.length, page);

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
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="flex flex-col items-center justify-center text-4xl"
                >{items[itemIndex]}</motion.div>
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

