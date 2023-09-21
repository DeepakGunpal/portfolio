import React, { useState } from "react";
import { MotionValue, motion, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";

const size = 100;
const gap = 15;

type props = {
    active: { row: number, col: number }
    setActive: React.Dispatch<React.SetStateAction<{
        row: number;
        col: number;
    }>>,
    colIndex: number,
    rowIndex: number,
    x: MotionValue<number>,
    y: MotionValue<number>,
    skill: string
}

const SkillsGrid = ({ active, setActive, colIndex, rowIndex, x, y, skill }: props) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => setIsHovered(true);
    const handleHoverExit = () => setIsHovered(false);
    const isDragging = colIndex === active.col && rowIndex === active.row;
    const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
    const d = distance(
        { x: active.col, y: active.row },
        { x: colIndex, y: rowIndex }
    );
    const springConfig = {
        stiffness: Math.max(700 - d * 120, 0),
        damping: 20 + d * 5
    };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);
    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
            dragElastic={1}
            onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
            onHoverStart={handleHover}
            onHoverEnd={handleHoverExit}
            style={{
                color: "black",
                width: size,
                height: size,
                top: rowIndex * (size + gap),
                left: colIndex * (size + gap),
                position: "absolute",
                borderRadius: "50%",
                x: isDragging ? x : dx,
                y: isDragging ? y : dy,
                zIndex: isDragging ? 1 : 0,
                wordWrap: "break-word",
                scale: isHovered ? 1.1 : 1, // Scale when hovered
            }}
            className="flex items-center justify-center p-8 text-center bg-gradient-to-br from-pink-300 via-violet-400 to-blue-300"
        >{skill}</motion.div>
    )
}

export default SkillsGrid