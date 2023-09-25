import { useState } from "react";
import { motion } from "framer-motion";

const pages = [1, 2, 3, 4, 5];
const indicatorSize = 10;
const indicatorPadding = 10;
const indicatorWidth = pages.length * indicatorSize;
const indicatorPaddingTotal = (pages.length - 1) * indicatorPadding;
const indicatorWidthTotal = indicatorWidth + indicatorPaddingTotal;
const indicatorAlpha = 0.3;

import React from 'react'

const Project = () => {
    const [current, setCurrent] = useState(0);

    return (
        <>
            <div
                // width={150}
                // height={150}
                // radius={30}
                // center
                // value={current}
                // onChangePage={(current: number) => setCurrent(current)}
            >
                {pages.map((index) => {
                    return (
                        <div
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 30,
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            key={index}
                        >
                            DG
                        </div>
                    );
                })}
            </div>

            {pages.map((index) => {
                return (
                    <motion.div
                        style={{
                            width: indicatorSize,
                            height: indicatorSize,
                            borderRadius: 30,
                            backgroundColor: "#fff",
                            position: "absolute",
                            top: "calc(50% + 100px)",
                            left: `calc(50% + ${index - 1} * ${indicatorSize + indicatorPadding
                                }px)`,
                            x: -indicatorWidthTotal / 2,
                            opacity: indicatorAlpha,
                            cursor: "pointer"
                        }}
                        animate={{
                            opacity: current === index - 1 ? 1 : indicatorAlpha
                        }}
                        onTap={() => setCurrent(index - 1)}
                        key={index}
                    />
                );
            })}
        </>
    );
}

export default Project