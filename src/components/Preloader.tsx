"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-[#030014] flex flex-col items-center justify-center"
                >
                    {/* Animated Logo */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <motion.h1
                            className="text-7xl font-display font-black text-white"
                            animate={{
                                textShadow: [
                                    "0 0 20px rgba(0,243,255,0)",
                                    "0 0 40px rgba(0,243,255,0.5)",
                                    "0 0 20px rgba(0,243,255,0)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            AS<span className="text-neon-cyan">.</span>
                        </motion.h1>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="w-64 h-px bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan to-neon-purple"
                            initial={{ width: "0%" }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>

                    {/* Percentage */}
                    <motion.p
                        className="mt-4 font-mono text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {Math.min(Math.round(progress), 100)}%
                    </motion.p>

                    {/* Loading Text */}
                    <motion.p
                        className="mt-8 font-mono text-xs text-neon-cyan tracking-widest"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        INITIALIZING SYSTEM...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
