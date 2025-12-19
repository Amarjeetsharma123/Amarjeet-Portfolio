"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Palette, Brain, Rocket } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionTransitions";
import { RollingText } from "@/components/ui/TextEffects";

const skills = [
    { name: "Java", icon: <Code2 size={24} />, color: "neon-cyan" },
    { name: "MERN Stack", icon: <Database size={24} />, color: "neon-purple" },
    { name: "System Design", icon: <Server size={24} />, color: "neon-pink" },
    { name: "UI/UX", icon: <Palette size={24} />, color: "neon-cyan" },
    { name: "Problem Solving", icon: <Brain size={24} />, color: "neon-purple" },
    { name: "Deployment", icon: <Rocket size={24} />, color: "neon-pink" },
];

export const About = () => {
    return (
        <section id="about" className="py-32 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left - Text Content */}
                    <SectionReveal direction="left">
                        <span className="text-neon-cyan font-mono text-sm tracking-widest">ABOUT ME</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-8 text-white">
                            <RollingText>Beyond the Code</RollingText>
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I am <span className="text-white font-semibold">Amarjeet Sharma</span>.
                                My journey isn't just about syntax; it's about solving real-world problems with elegance.
                            </p>
                            <p>
                                I merge the rigidity of backend logic with the fluidity of modern frontend design
                                to create experiences that are both powerful and beautiful.
                            </p>
                            <p className="text-gray-500">
                                When I'm not debugging, I'm likely deconstructing complex systems or sipping chai at 3 AM
                                while exploring new tech stacks.
                            </p>
                        </div>
                    </SectionReveal>

                    {/* Right - Skills Grid */}
                    <StaggerContainer className="grid grid-cols-2 gap-4">
                        {skills.map((skill) => (
                            <StaggerItem key={skill.name}>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="group p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:border-neon-cyan/30 transition-all duration-300 cursor-default backdrop-blur-sm"
                                >
                                    <div className={`mb-4 text-${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="font-display font-bold text-white group-hover:text-neon-cyan transition-colors">
                                        {skill.name}
                                    </h3>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};
