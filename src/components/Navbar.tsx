"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
                    isScrolled
                        ? "w-[90%] max-w-3xl"
                        : "w-[95%] max-w-7xl"
                )}
            >
                {/* Glassmorphism Container */}
                <div className={cn(
                    "relative rounded-2xl transition-all duration-500",
                    isScrolled
                        ? "bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
                        : "bg-transparent"
                )}>
                    {/* Inner Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative px-6 py-4 flex items-center justify-between">
                        <a href="#hero" className="font-display font-bold text-2xl tracking-tighter text-white group">
                            AS<span className="text-neon-cyan group-hover:animate-pulse">.</span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-neon-cyan group-hover:w-[50%] transition-all duration-300" />
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:block">
                            <a
                                href="mailto:sharmaamarjeet239@gmail.com"
                                className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-neon-cyan hover:text-black hover:border-neon-cyan transition-all duration-300 rounded-lg"
                            >
                                Hire Me
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu - Glassmorphism */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl pt-28 px-6"
                    >
                        <div className="flex flex-col items-center gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-display font-bold text-white hover:text-neon-cyan transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
