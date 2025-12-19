"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// ===== ROLLING TEXT - Character by character reveal on scroll =====
interface RollingTextProps {
    children: string;
    className?: string;
    delay?: number;
}

export const RollingText = ({ children, className = "", delay = 0 }: RollingTextProps) => {
    const characters = children.split("");

    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.03,
                delayChildren: delay,
            },
        },
    };

    const child: Variants = {
        hidden: {
            y: "100%",
            opacity: 0,
            rotateX: -90,
        },
        visible: {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-flex overflow-hidden ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block"
                    style={{ transformOrigin: "bottom" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

// ===== WORD REVEAL - Word by word blur reveal =====
interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export const TextReveal = ({ children, className = "", delay = 0 }: TextRevealProps) => {
    const words = children.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: delay },
        },
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span key={index} className="mr-2" variants={child}>
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

// ===== LINE REVEAL - Lines slide up one by one =====
interface LineRevealProps {
    children: string;
    className?: string;
}

export const LineReveal = ({ children, className = "" }: LineRevealProps) => {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

// ===== GLITCH TEXT - Chromatic aberration on hover =====
interface GlitchTextProps {
    children: string;
    className?: string;
}

export const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
    return (
        <motion.span
            className={`relative inline-block ${className}`}
            whileHover="hover"
        >
            <span className="relative z-10">{children}</span>
            <motion.span
                className="absolute inset-0 text-neon-cyan opacity-0"
                variants={{
                    hover: {
                        opacity: 0.8,
                        x: [0, -2, 2, -2, 0],
                        transition: { duration: 0.3, repeat: Infinity },
                    },
                }}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
            >
                {children}
            </motion.span>
            <motion.span
                className="absolute inset-0 text-neon-pink opacity-0"
                variants={{
                    hover: {
                        opacity: 0.8,
                        x: [0, 2, -2, 2, 0],
                        transition: { duration: 0.3, repeat: Infinity },
                    },
                }}
                style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
            >
                {children}
            </motion.span>
        </motion.span>
    );
};

// ===== GRADIENT TEXT - Animated gradient =====
interface GradientTextProps {
    children: string;
    className?: string;
}

export const GradientText = ({ children, className = "" }: GradientTextProps) => {
    return (
        <span
            className={`text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-[length:200%_auto] animate-gradient ${className}`}
        >
            {children}
        </span>
    );
};
