'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main>
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center pt-20"
            >
                <h1 className="font-medium text-6xl">
                    About <span className="primary-red">Resolvo</span>
                </h1>
                <p className="mt-5 text-lg secondary-text-red">
                    We're a software development agency focused on building lasting solutions
                    <br />
                    for businesses of all sizes.
                </p>
            </motion.div>

            {/* Main Content */}
            <section className="w-[80%] mx-auto py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Photo and Personal Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        {/* Photo Placeholder */}
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[var(--divider-color)] shadow-md hover:shadow-lg transition-all duration-200">
                            <Image
                                src="/placeholder-photo.jpg"
                                alt="Logan Briggs"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Personal Info */}
                        <div className="space-y-3">
                            <h2 className="text-2xl font-medium text-[var(--foreground)]">Logan Briggs</h2>
                            <p className="text-[var(--primary-red)] text-lg">Founder & Lead Developer</p>
                            <div className="space-y-2">
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Passionate about creating software that makes a difference.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Company Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-[var(--foreground)]">Our Story</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Resolvo was founded with a simple mission: to build software that lasts. We believe that businesses deserve solutions that grow with them, not ones that need constant rebuilding.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Our approach combines technical expertise with a deep understanding of business needs, ensuring that every project we undertake delivers lasting value.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-[var(--foreground)]">Our Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="bg-white rounded-xl p-8 border border-[var(--divider-color)] shadow-sm hover:border-[var(--primary-red)] hover:shadow-md transition-all duration-200"
                                >
                                    <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Quality First</h3>
                                    <p className="text-gray-500">We never compromise on quality, ensuring our solutions stand the test of time.</p>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                    className="bg-white rounded-xl p-8 border border-[var(--divider-color)] shadow-sm hover:border-[var(--primary-red)] hover:shadow-md transition-all duration-200"
                                >
                                    <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Client Focus</h3>
                                    <p className="text-gray-500">Your success is our success. We work closely with you to achieve your goals.</p>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                                    className="bg-white rounded-xl p-8 border border-[var(--divider-color)] shadow-sm hover:border-[var(--primary-red)] hover:shadow-md transition-all duration-200"
                                >
                                    <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Innovation</h3>
                                    <p className="text-gray-500">We stay ahead of the curve, using the latest technologies to deliver cutting-edge solutions.</p>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                                    className="bg-white rounded-xl p-8 border border-[var(--divider-color)] shadow-sm hover:border-[var(--primary-red)] hover:shadow-md transition-all duration-200"
                                >
                                    <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Transparency</h3>
                                    <p className="text-gray-500">Clear communication and honest feedback are at the heart of everything we do.</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-[var(--secondary-background)] pt-20 pb-20 relative overflow-hidden transform -skew-y-3"
            >
                <div className="w-[70%] mx-auto text-center relative z-10 transform skew-y-3">
                    <h2 className="text-3xl font-medium text-white mb-6">Ready to Build Something Amazing?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help bring your vision to life with software that lasts.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="/contact" className="px-6 py-3 bg-[var(--primary-red)] text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                            Get in Touch
                        </a>
                        <a href="/work" className="px-6 py-3 bg-white text-[var(--foreground)] rounded-lg hover:bg-gray-100 transition-colors duration-200">
                            View Our Work
                        </a>
                    </div>
                </div>
            </motion.div>
        </main>
    );
} 