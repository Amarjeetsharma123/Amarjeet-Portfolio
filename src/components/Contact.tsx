"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, ArrowUpRight } from "lucide-react";
import { SectionReveal, SlideIn, ScaleIn } from "@/components/ui/SectionTransitions";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:sharmaamarjeet239@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left - Text */}
                    <SlideIn direction="left">
                        <span className="text-neon-cyan font-mono text-sm tracking-widest">CONTACT</span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white">
                            Let's Work <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Together</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            Have a project in mind or just want to chat? Fill out the form and I'll get back to you as soon as possible.
                        </p>

                        {/* Quick Contact */}
                        <motion.a
                            href="mailto:sharmaamarjeet239@gmail.com"
                            className="inline-flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors group"
                            whileHover={{ x: 10 }}
                        >
                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-neon-cyan/10 transition-colors">
                                <Mail size={18} />
                            </div>
                            sharmaamarjeet239@gmail.com
                        </motion.a>
                    </SlideIn>

                    {/* Right - Form */}
                    <SlideIn direction="right" delay={0.2}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <motion.div
                                className="relative group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                                <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-4 focus-within:border-neon-cyan/50 transition-colors">
                                    <label className="text-xs text-gray-500 font-mono uppercase tracking-wider flex items-center gap-2 mb-2">
                                        <User size={14} /> Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-lg"
                                    />
                                </div>
                            </motion.div>

                            {/* Email Input */}
                            <motion.div
                                className="relative group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                                <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-4 focus-within:border-neon-cyan/50 transition-colors">
                                    <label className="text-xs text-gray-500 font-mono uppercase tracking-wider flex items-center gap-2 mb-2">
                                        <Mail size={14} /> Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                        className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-lg"
                                    />
                                </div>
                            </motion.div>

                            {/* Message Input */}
                            <motion.div
                                className="relative group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                                <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-4 focus-within:border-neon-cyan/50 transition-colors">
                                    <label className="text-xs text-gray-500 font-mono uppercase tracking-wider flex items-center gap-2 mb-2">
                                        <MessageSquare size={14} /> Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        required
                                        rows={4}
                                        className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-lg resize-none"
                                    />
                                </div>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0,243,255,0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold font-display text-lg py-5 rounded-xl transition-all duration-300 group"
                            >
                                <Send size={20} />
                                Send Message
                                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </SlideIn>
                </div>
            </div>

            {/* Background Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-neon-purple/10 rounded-full blur-[200px] pointer-events-none"
            />
        </section>
    );
};
