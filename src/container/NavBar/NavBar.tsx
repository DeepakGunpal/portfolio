"use client"
import Link from 'next/link';
import { motion } from "framer-motion";
import { useSnapshot } from 'valtio';
import state from '@/valtio/store';

let tabs = [
    { id: "/", label: "Home" },
    { id: "#skills", label: "Skills" },
    { id: "#experience", label: "Experience" },
    // { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
];

const Navar = () => {
    let snap = useSnapshot(state)
    const { activeTab } = snap

    return (
        <nav className="fixed top-5 left-1/3 w-1/3 bg-white bg-opacity-50 backdrop-blur-md p-3 rounded-full z-50">
            <div className="container mx-auto flex space-x-1 justify-center flex-wrap">
                {tabs.map((tab) => (
                    <Link
                        href={`${tab.id}`}
                        key={tab.id}
                        onClick={() => state.activeTab = tab.id}
                        className={`relative rounded-full px-3 text-md font-medium text-black outline-none transition focus-visible:outline-2`}
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
