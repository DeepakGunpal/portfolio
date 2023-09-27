import React from "react";
import { MotionValue, motion, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";

type props = {
  active: { index: number };
  setActive: React.Dispatch<React.SetStateAction<{ index: number }>>;
  index: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
  skill: string;
  size: number;
  gap: number;
};

const SkillsGrid = ({ active, setActive, index, x, y, skill, size, gap }: props) => {
  const isDragging = index === active.index;
  const springConfig = {
    stiffness: 400,
    damping: 17,
  };

  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ index })}
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 4px gray",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      style={{
        color: "black",
        width: size,
        height: size,
        borderRadius: "50%",
        marginBottom: gap + "px", // Add margin at the bottom for spacing
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
        wordWrap: "break-word",
      }}
      className="flex items-center justify-center p-8 text-center bg-gradient-to-br from-pink-300 via-violet-400 to-blue-300"
    >
      {skill}
    </motion.div>
  );
};

export default SkillsGrid;
