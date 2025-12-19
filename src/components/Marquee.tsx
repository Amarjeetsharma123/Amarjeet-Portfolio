"use client";
import React from "react";
import { motion } from "framer-motion";

import {
    SiAmazon,
    SiDocker,
    SiExpress,
    SiFigma,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Cpu } from "lucide-react";

const techs = [
    { name: "JAVA", icon: FaJava, color: "#b2651cff" },
    { name: "REACT.JS", icon: SiReact, color: "#61DAFB" },
    { name: "NODE.JS", icon: SiNodedotjs, color: "#339933" },
    { name: "MONGODB", icon: SiMongodb, color: "#47A248" },
    { name: "EXPRESS", icon: SiExpress, color: "#ffffff" }, // White for visibility on dark bg
    { name: "NEXT.JS", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TYPESCRIPT", icon: SiTypescript, color: "#3178C6" },
    { name: "TAILWIND", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "FIGMA", icon: SiFigma, color: "#F24E1E" },
    { name: "DOCKER", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "SYSTEM DESIGN", icon: Cpu, color: "#ffffff" },
];

export const TechMarquee = () => {
    return (
        <div className="relative w-full py-6 overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur-sm my-12">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10" />

            <div className="flex whitespace-nowrap animate-marquee">
                {[...techs, ...techs, ...techs].map((tech, i) => (
                    <div key={i} className="mx-8 flex items-center gap-2 text-cyan font-mono text-sm tracking-widest hover:text-neon-cyan transition-colors cursor-default">
                        <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                        {tech.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const BigMarquee = () => {
    return (
        <div className="relative w-full py-20 overflow-hidden border-y border-white/5 my-24 bg-black/20">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#030014] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#030014] to-transparent z-10" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -2000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {[1, 2, 3, 4].map((_, i) => (
                    <h2 key={i} className="text-[80px] md:text-[120px] font-display font-black text-transparent mr-8 cursor-default"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
                        LET'S BUILD SOMETHING SICK
                        <span className="text-neon-cyan mx-8">★</span>
                    </h2>
                ))}
            </motion.div>
        </div>
    );
};
