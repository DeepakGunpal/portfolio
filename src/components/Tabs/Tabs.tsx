import "./Tabs.css";
import { useState } from "react";
// import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "../Carousel/Carousel";

const tabs = [{ label: "", icon: "" }]

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="project_tabs relative">
            <nav>
                <ul>
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={item === selectedTab ? "selected" : ""}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full"
                    >
                        <Carousel />
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default Tabs