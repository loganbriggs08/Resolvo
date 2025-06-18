'use client';

import Image from "next/image"
import Link from "next/link";
import { Project } from "../lib/mdx";
import ClientButtons from "./ClientButtons";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { FaSearch, FaPencilRuler, FaRocket, FaGlobe, FaShoppingCart, FaMobileAlt, FaLaptopCode, FaClock } from "react-icons/fa";
import { useState } from "react";

import website_example from "../../public/website_example.png"

import trusted_by_analyse from "../../public/trusted-by/trusted_by_analyse.webp"
import trusted_by_zinara from "../../public/trusted-by/trusted_by_zinara-1.webp"
import trusted_by_cherubs from "../../public/trusted-by/trusted_by_cherubs_childrenswear.webp"
import trusted_by_pavise from "../../public/trusted-by/trusted_by_pavise-1.webp"
import trusted_by_validate from "../../public/trusted-by/trusted_by_validate.png"
import trusted_by_heli from "../../public/trusted-by/trusted_by_heli.webp"

interface AnimatedHomeProps {
    featuredProjects: Project[];
}

export default function AnimatedHome({ featuredProjects }: AnimatedHomeProps) {
    // Move testimonials and useState to the top level
    const testimonials = [
      {
        text: "Resolvo helped us turn our vision into a reality. The team was professional, communicative, and delivered a product that exceeded our expectations.",
        name: "Jane Doe",
        company: "Acme Corp",
        avatar: "/avatar-placeholder.png"
      },
      {
        text: "The Resolvo team was a pleasure to work with. They delivered on time and went above and beyond to ensure our satisfaction.",
        name: "John Smith",
        company: "Beta Ltd",
        avatar: "/avatar-placeholder.png"
      },
      {
        text: "Excellent communication and top-notch results. Highly recommend Resolvo for any web project!",
        name: "Emily Chen",
        company: "Gamma Solutions",
        avatar: "/avatar-placeholder.png"
      }
    ];
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const prevTestimonial = () => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
    const nextTestimonial = () => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);

    return (
        <main>
            {/* Website hook section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={"text-center pt-20"}
            >
                <h1 className={"font-medium text-6xl"}>
                    We <span className={"primary-red"}>Build Software</span> That
                    <br/>
                    Lasts From Day One
                </h1>

                <p className={"mt-5 text-lg secondary-text-red"}>
                    We believe problems should only have to be solved once and once only.
                    <br/>
                    Our software is designed to last from the beginning.
                </p>

                <ClientButtons />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={"w-[70%] mt-15 ml-auto mr-auto"}
                >
                    <Image
                        src={website_example}
                        alt={"Website example"}
                    />
                </motion.div>
            </motion.div>

            {/* Trusted by section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={"w-full bg-[var(--off-white)] text-center mt-0 pt-20 pb-10"}
            >
        

                {/* What we offer section */}
                <section className="w-[80%] ml-auto mr-auto py-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl font-semibold mb-4">What We Offer</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Comprehensive digital solutions tailored to your business needs, delivered with expertise and precision.
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Web Development */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="bg-white rounded-xl p-8 border border-[var(--divider-color)] flex flex-col items-center shadow-sm hover:border-[var(--primary-red)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white text-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                        <FaGlobe />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4 text-center">Web Development</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Custom websites and web applications built with modern technologies for optimal performance and user experience.</p>
                    </motion.div>

                    {/* eCommerce Solutions */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                      className="bg-white rounded-xl p-8 border border-[var(--divider-color)] flex flex-col items-center shadow-sm hover:border-[var(--primary-red)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white text-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                        <FaShoppingCart />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4 text-center">eCommerce Solutions</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Complete online stores with secure payment processing, inventory management, and customer features.</p>
                    </motion.div>

                    {/* Mobile Apps */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                      className="bg-white rounded-xl p-8 border border-[var(--divider-color)] flex flex-col items-center shadow-sm hover:border-[var(--primary-red)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white text-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                        <FaMobileAlt />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4 text-center">Mobile Apps</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Native and cross-platform mobile applications that deliver exceptional user experiences.</p>
                    </motion.div>

                    {/* UI/UX Design */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                      className="bg-white rounded-xl p-8 border border-[var(--divider-color)] flex flex-col items-center shadow-sm hover:border-[var(--primary-red)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white text-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                        <FaPencilRuler />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4 text-center">UI/UX Design</h3>
                      <p className="text-gray-600 text-center leading-relaxed">User-centered design that creates intuitive and engaging digital experiences.</p>
                    </motion.div>

                    {/* API Development */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                      className="bg-white rounded-xl p-8 border border-[var(--divider-color)] flex flex-col items-center shadow-sm hover:border-[var(--primary-red)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white text-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                        <FaLaptopCode />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4 text-center">API Development</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Robust and scalable APIs that power your applications and enable seamless integrations.</p>
                    </motion.div>

                    {/* Maintenance & Support */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                      className="bg-white rounded-xl p-8 border border-[var(--divider-color)] flex flex-col items-center shadow-sm hover:border-[var(--primary-red)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--primary-red)] text-white text-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                        <FaClock />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4 text-center">Maintenance & Support</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Ongoing support and maintenance to keep your digital products running smoothly.</p>
                    </motion.div>
                  </div>
                </section>
            </motion.div>

            {/* Featured Work Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={"w-full bg-[var(--secondary-background)] relative overflow-hidden transform -skew-y-3"}
                style={{ 
                    paddingTop: '120px', 
                    paddingBottom: '120px', 
                    marginTop: '-60px', 
                    marginBottom: '-60px' 
                }}
            >
                <div className={"w-[70%] ml-auto mr-auto text-left relative z-10 transform skew-y-3"}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl font-medium text-white mb-3">Featured Work</h2>
                        <p className="text-gray-400">Explore some of our recent projects and see how we've helped businesses achieve their goals.</p>
                    </motion.div>
                    <div className={"grid grid-cols-2 gap-8"}>
                        {featuredProjects.map((project, index) => (
                            <motion.div 
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={"rounded-lg overflow-hidden"}
                            >
                                <Image
                                    src={project.frontmatter.image}
                                    alt={project.frontmatter.name}
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                    className="object-cover h-48 rounded-lg"
                                />
                                <div className={"p-4"}>
                                    <h3 className={"font-medium text-2xl text-white mb-2"}>{project.frontmatter.name}</h3>
                                    <p className={"text-gray-400 mb-4"}>{project.frontmatter.description}</p>
                                    <Link href={`/work/${project.slug}`} className={"text-white flex items-center"}>
                                        <span className={"bg-gradient-to-t from-white to-white bg-no-repeat bg-bottom bg-[length:100%_1px]"}>
                                            View Detail
                                        </span>
                                        <span className={"ml-1"}>&gt;</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={"w-full bg-[var(--off-white)] py-20"}
            >
                <div className="w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Heading and description */}
                    <div className="flex-1 text-left">
                        <h2 className="font-medium text-4xl text-[var(--foreground)] mb-4">
                            What our <span className="primary-red underline">customers say</span>
                        </h2>
                        <p className="text-gray-600 max-w-md">
                            There's nothing better than a happy customer. Here are some of the lovely things ours have to say about us.
                        </p>
                    </div>
                    {/* Right: Testimonial Card */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="relative w-full max-w-xl bg-white rounded-xl border border-[var(--divider-color)] shadow p-8 pt-12 pb-10 flex flex-col items-center" style={{minHeight: 260}}>
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white" />
                            <div className="text-[var(--foreground)] text-lg text-center mb-8 px-2 leading-relaxed">
                                "{testimonials[currentTestimonial].text}"
                            </div>
                            <div className="flex flex-col items-center mt-auto">
                                <div className="w-16 h-16 rounded-full bg-[var(--divider-color)] flex items-center justify-center overflow-hidden mb-2 border-2 border-[var(--primary-red)]">
                                    <img src={testimonials[currentTestimonial].avatar} alt="Customer avatar" className="w-full h-full object-cover" />
                                </div>
                                <div className="font-semibold text-[var(--primary-red)] text-base">{testimonials[currentTestimonial].name}</div>
                                <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].company}</div>
                            </div>
                            {/* Accent underline */}
                            <div className="absolute left-0 right-0 bottom-0 h-2 rounded-b-xl bg-[var(--primary-red)] opacity-80" style={{zIndex: 1}} />
                        </div>
                        {/* Carousel controls */}
                        <div className="flex items-center justify-center gap-2 mt-6">
                            <button onClick={prevTestimonial} className="w-8 h-8 flex items-center justify-center text-[var(--primary-red)] bg-white border border-[var(--divider-color)] rounded-full shadow hover:bg-[var(--primary-red)] hover:text-white transition">
                                <span className="sr-only">Previous</span>
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                            </button>
                            <div className="flex gap-1 mx-2">
                                {testimonials.map((_, i) => (
                                    <span key={i} className={`w-2 h-2 rounded-full bg-[var(--primary-red)] inline-block ${i === currentTestimonial ? 'opacity-80' : 'opacity-30'}`} />
                                ))}
                            </div>
                            <button onClick={nextTestimonial} className="w-8 h-8 flex items-center justify-center text-[var(--primary-red)] bg-white border border-[var(--divider-color)] rounded-full shadow hover:bg-[var(--primary-red)] hover:text-white transition">
                                <span className="sr-only">Next</span>
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-[var(--secondary-background)] py-20 relative overflow-hidden transform -skew-y-3"
            >
                <div className="w-[70%] mx-auto text-center relative z-10 transform skew-y-3">
                    <h2 className="text-3xl font-medium text-white mb-6">Ready to Start Your Project?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Get a detailed quote or reach out to discuss your project requirements.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link 
                            href="/quote" 
                            className="px-8 py-4 bg-[var(--primary-red)] text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                        >
                            Get Project Quote
                        </Link>
                        <a 
                            href="#contact" 
                            className="px-8 py-4 bg-white text-[var(--foreground)] rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="contact"
                className="w-full bg-[var(--off-white)] py-20"
            >
                <div className="w-[70%] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-medium text-[var(--foreground)] mb-3">Let's Discuss Your Project</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tell us about your project requirements and we'll get back to you with a detailed proposal within 24 hours.
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <ContactForm />
                    </div>
                </div>
            </motion.div>
        </main>
    );
} 