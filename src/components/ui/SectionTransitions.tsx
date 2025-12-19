"use client";
import React from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

const directionVariants = {
    up: { y: 100, opacity: 0 },
    down: { y: -100, opacity: 0 },
    left: { x: 100, opacity: 0 },
    right: { x: -100, opacity: 0 },
};

export const SectionReveal = ({
    children,
    className = "",
    delay = 0,
    direction = "up"
}: SectionRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={directionVariants[direction]}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}

export const StaggerContainer = ({
    children,
    className = "",
    staggerDelay = 0.1
}: StaggerContainerProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
}

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    speed?: number;
}

export const ParallaxSection = ({
    children,
    className = "",
    speed = 0.5
}: ParallaxSectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

interface FadeInWhenVisibleProps {
    children: React.ReactNode;
    className?: string;
}

export const FadeInWhenVisible = ({ children, className = "" }: FadeInWhenVisibleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface SlideInProps {
    children: React.ReactNode;
    className?: string;
    direction?: "left" | "right";
    delay?: number;
}

export const SlideIn = ({
    children,
    className = "",
    direction = "left",
    delay = 0
}: SlideInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface ScaleInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const ScaleIn = ({ children, className = "", delay = 0 }: ScaleInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
