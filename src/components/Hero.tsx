"use client";
import React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal, GlitchText } from "@/components/ui/TextEffects";

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">

            {/* Background Marquee - subtle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] -rotate-12 opacity-[0.03] pointer-events-none select-none">
                <div className="flex whitespace-nowrap gap-8 animate-marquee">
                    {Array(6).fill("AMARJEET SHARMA").map((item, i) => (
                        <h1 key={i} className="text-[10rem] font-black font-display" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
                            {item}
                        </h1>
                    ))}
                </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-neon-purple/20 rounded-full blur-[100px] md:blur-[150px] animate-pulse pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-20">
                <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="inline-block"
                    >
                        <span className="px-3 py-1.5 md:px-4 md:py-2 border border-neon-cyan/20 bg-neon-cyan/5 rounded-full text-neon-cyan font-mono text-[10px] md:text-xs tracking-widest backdrop-blur-sm">
                            &lt; AVAILABLE FOR WORK /&gt;
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[0.9] font-display text-white">
                            FULL STACK <br />
                            <GlitchText className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink">
                                DEVELOPER
                            </GlitchText>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <TextReveal className="text-gray-400 text-base md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans" delay={1}>
                            I am Amarjeet Sharma. I build high-performance, scalable web applications with heavy animations and solid backend logic.
                        </TextReveal>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
                    >
                        <MagneticButton
                            href="#projects"
                            className="group px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold font-display rounded-sm flex items-center gap-2 text-sm md:text-base"
                        >
                            VIEW PROJECTS
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </MagneticButton>
                        <MagneticButton
                            href="https://github.com/Amarjeetsharma123"
                            className="px-6 py-3 md:px-8 md:py-4 border border-white/20 text-white font-bold font-display rounded-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-sm md:text-base"
                        >
                            GITHUB
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Right side - Abstract Visual */}
                <div className="relative flex items-center justify-center order-1 lg:order-2">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] relative"
                    >
                        {/* Outer Ring */}
                        <div className="absolute inset-0 rounded-full border border-white/5 animate-spin" style={{ animationDuration: "20s" }} />
                        <div className="absolute inset-4 rounded-full border border-neon-cyan/20" />
                        <div className="absolute inset-8 rounded-full border border-neon-purple/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />

                        {/* Core Glow */}
                        <div className="absolute inset-16 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-full blur-xl" />

                        {/* Center Content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex items-center justify-center">

                                <img
                                    src="/amar.jpg"   // public folder OR replace with imported image
                                    alt="Profile"
                                    className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-cyan-400 shadow-xl object-cover"
                                />

                            </div>
                        </div>


                        {/* Orbiting Dots */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8"
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neon-purple rounded-full shadow-[0_0_10px_rgba(189,0,255,0.8)]" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-neon-cyan rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};
