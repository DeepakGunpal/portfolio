"use client"
import Link from 'next/link';

import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
    { id: "", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const Navar = () => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <nav className="fixed top-5 left-1/4 w-1/2 bg-white bg-opacity-50 backdrop-blur-md p-4 rounded-full z-50">
            <div className="container mx-auto flex space-x-1 justify-center">
                {tabs.map((tab) => (
                    <Link
                        href={`#${tab.id}`}
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${activeTab === tab.id ? "" : "hover:text-sky-600"
                            } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navar;
