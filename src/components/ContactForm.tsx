'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    phone: string;
    projectType: string;
    budget: string;
    timeline: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const projectTypes = [
        'Web Application',
        'Mobile App',
        'eCommerce Store',
        'API Development',
        'UI/UX Design',
        'Maintenance & Support',
        'Other'
    ];

    const budgetRanges = [
        'Under £1,000',
        '£1,000 - £5,000',
        '£5,000 - £15,000',
        '£15,000 - £25,000',
        '£25,000 - £50,000',
        '£50,000+'
    ];

    const timelines = [
        'ASAP',
        '1-2 months',
        '3-4 months',
        '5-6 months',
        '6+ months',
        'Flexible'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const subject = `New Project Inquiry from ${formData.name}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}
        `;

        const mailtoLink = `mailto:logan@resolvo.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl p-8 border border-[var(--divider-color)] shadow-lg text-center"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-6">Your email client should have opened with your inquiry. We'll get back to you within 24 hours.</p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[var(--primary-red)] hover:underline"
                >
                    Send Another Message
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-10 border border-[var(--divider-color)] shadow-lg"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-3">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-red)] focus:border-transparent transition-colors text-base"
                        placeholder="Your full name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-3">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-red)] focus:border-transparent transition-colors text-base"
                        placeholder="your@email.com"
                    />
                </div>

                {/* Company */}
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--foreground)] mb-3">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-red)] focus:border-transparent transition-colors text-base"
                        placeholder="Your company name"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-3">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-red)] focus:border-transparent transition-colors text-base"
                        placeholder="(020) 7123 4567"
                    />
                </div>

                {/* Project Type */}
                <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-[var(--foreground)] mb-3">
                        Project Type *
                    </label>
                    <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-red)] focus:border-transparent transition-colors text-base"
                    >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {/* Budget */}
                <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[var(--foreground)] mb-3">
                        Rough Budget *
                    </label>
                    <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-red)] focus:border-transparent transition-colors text-base"
                    >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                        ))}
                    </select>
                </div>

                {/* Timeline */}
                <div className="md:col-span-2">
                    <label htmlFor="timeline" className="block text-sm font-medium text-[var(--foreground)] mb-3">
                        Preferred Timeline
                    </label>
                    <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-red)] focus:border-transparent transition-colors text-base"
                    >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-3">
                        Project Details *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-red)] focus:border-transparent transition-colors resize-vertical text-base"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 text-center">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-4 bg-[var(--primary-red)] text-white rounded-lg font-medium hover:bg-red-700 focus:ring-4 focus:ring-red-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-gray-500 text-sm mt-4">
                    We'll get back to you within 24 hours
                </p>
            </div>
        </motion.form>
    );
} 