"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionTransitions";
import { RollingText } from "@/components/ui/TextEffects";

const educationData = [
    {
        institution: "Parul University",
        degree: "MCA - Full Stack Web Development",
        year: "2024 - 2026",
        grade: "CGPA: 8.19",
        icon: <GraduationCap size={28} />,
    },
    {
        institution: "S.V.P College Bhabua",
        degree: "BCA - Computer Application",
        year: "2019 - 2022",
        grade: "CGPA: 7.51",
        icon: <School size={28} />,
    },
];

export const Education = () => {
    return (
        <section id="education" className="py-32 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <SectionReveal className="mb-16">
                    <span className="text-neon-cyan font-mono text-sm tracking-widest">BACKGROUND</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-white">
                        <RollingText>Education</RollingText>
                    </h2>
                </SectionReveal>

                <div className="relative">
                    {/* Timeline line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent origin-top"
                    />

                    <StaggerContainer className="space-y-8" staggerDelay={0.3}>
                        {educationData.map((edu, index) => (
                            <StaggerItem key={index}>
                                <div className="relative pl-14">
                                    {/* Timeline dot */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="absolute left-0 top-2 w-10 h-10 rounded-full bg-black border border-neon-cyan/50 flex items-center justify-center text-neon-cyan"
                                    >
                                        {edu.icon}
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        transition={{ type: "spring" as const, stiffness: 300 }}
                                        className="bg-white/[0.03] border border-white/10 p-6 rounded-xl hover:border-neon-cyan/30 transition-all duration-300 backdrop-blur-sm"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                                            <h3 className="text-xl font-display font-bold text-white">{edu.institution}</h3>
                                            <span className="text-neon-cyan font-mono text-sm">{edu.year}</span>
                                        </div>
                                        <p className="text-gray-400">{edu.degree}</p>
                                        {edu.grade && (
                                            <span className="inline-block mt-3 px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full text-xs font-mono text-neon-cyan">
                                                {edu.grade}
                                            </span>
                                        )}
                                    </motion.div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};
