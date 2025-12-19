"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionTransitions";
import { RollingText } from "@/components/ui/TextEffects";

interface Project {
    title: string;
    category: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
}

const projects: Project[] = [
    {
        title: "Ramdev Furniture",
        category: "Full Stack Ecommerce",
        description: "A complete digital marketplace featuring user authentication, OTP verification, admin dashboard, and customer review system.",
        tags: ["Express.js", "MongoDB", "React"],
        link: "https://ramdevfurniture.com",
        github: "https://github.com/Amarjeetsharma123/E-Commerce-Website",
    },
    {
        title: "Hotel Management System",
        category: "Desktop Application",
        description: "Java Swing application designed for hotel operations. Manages room bookings, check-ins/outs, billing, and customer database.",
        tags: ["Java Swing", "MySQL"],
        link: "#",
        github: "https://github.com/Amarjeetsharma123/Hotel-Management-System",
    },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <StaggerItem>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="group relative w-full"
            >
                <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 border border-white/10 hover:border-neon-cyan/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-mono text-gray-600 text-sm">
                        0{index + 1}
                    </div>

                    <div className="relative z-10">
                        <span className="text-neon-cyan font-mono text-xs tracking-widest uppercase">{project.category}</span>
                        <h3 className="text-3xl font-display font-bold mt-3 mb-4 text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-md">{project.description}</p>

                        {/* Tags */}
                        <div className="flex gap-2 flex-wrap mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    <Github size={16} /> Source Code
                                </a>
                            )}
                            <a
                                href={project.link}
                                target="_blank"
                                className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors text-sm font-medium"
                            >
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </StaggerItem>
    );
};

export const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <SectionReveal className="mb-16">
                    <span className="text-neon-cyan font-mono text-sm tracking-widest">PORTFOLIO</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-white">
                        <RollingText>Selected Work</RollingText>
                    </h2>
                </SectionReveal>

                <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.2}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
