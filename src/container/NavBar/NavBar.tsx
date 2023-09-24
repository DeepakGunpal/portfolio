"use client"
import Link from 'next/link';
import { motion } from "framer-motion";
import { useSnapshot } from 'valtio';
import state from '@/valtio/store';
import { ContactIcon, ExperienceIcon, HomeIcon, SkillIcon } from '@/Svgs/Svgs';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

let tabs = [
    { id: "/", icon: <HomeIcon />, label: "Home" },
    { id: "#skills", icon: <SkillIcon />, label: "Skill" },
    { id: "#experience", icon: <ExperienceIcon />, label: "Experience" },
    // { id: "#projects", icon: "Projects" },
    { id: "#contact", icon: <ContactIcon />, label: "Chat" },
];

const Navar = () => {
    let snap = useSnapshot(state)
    const { activeTab } = snap

    return (
        <nav className="fixed top-5 w-full">
            <div className="container mx-auto flex space-x-1 justify-center items-center flex-wrap w-1/5 bg-white bg-opacity-50 backdrop-blur-md p-2 rounded-full z-50 gap-2">
                {tabs.map((tab) => (
                    <div key={tab.id} className={`relative rounded-full p-2 text-black outline-none transition focus-visible:outline-2`}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link
                                        href={`${tab.id}`}

                                        onClick={() => state.activeTab = tab.id}
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
                                        {tab?.icon}
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {tab?.label}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navar;
