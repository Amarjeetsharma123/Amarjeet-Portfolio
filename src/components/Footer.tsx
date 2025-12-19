"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Heart } from "lucide-react";

const footerLinks = {
    navigation: [
        { name: "Home", href: "#hero" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
    ],
    social: [
        { name: "GitHub", href: "https://github.com/Amarjeetsharma123", icon: <Github size={20} /> },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/amarjeetsh239/", icon: <Linkedin size={20} /> },
        { name: "Twitter", href: "https://x.com/amarjeet_s239", icon: <Twitter size={20} /> },
    ],
    contact: {
        email: "sharmaamarjeet239@gmail.com",
        phone: "+91 9334849363",
        location: "Bihar, India",
    },
};

export const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-white/5">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl" />

            {/* Main Footer */}
            <div className="relative max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h2 className="font-display font-bold text-4xl text-white mb-4">
                            Amarjeet Sharma<span className="text-neon-cyan">.</span>
                        </h2>
                        <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
                            Full Stack Developer crafting high-performance web experiences
                            with modern technologies and creative animations.
                        </p>
                        <div className="flex gap-3">
                            {footerLinks.social.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links - Glassmorphism Card */}
                    <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6">
                        <h3 className="font-display font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Glassmorphism Card */}
                    <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6">
                        <h3 className="font-display font-bold text-white mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={16} className="text-neon-cyan" />
                                <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-white transition-colors truncate">
                                    {footerLinks.contact.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={16} className="text-neon-cyan" />
                                <span>{footerLinks.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <MapPin size={16} className="text-neon-cyan" />
                                <span>{footerLinks.contact.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm font-mono flex items-center gap-2">
                        © 2025 Amarjeet Sharma. Made with <Heart size={14} className="text-neon-pink" />
                    </p>
                    <p className="text-gray-700 text-xs font-mono">
                        Next.js • Tailwind • Framer Motion
                    </p>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[200px] bg-neon-purple/5 blur-[100px] pointer-events-none" />
        </footer>
    );
};
