'use client';

import { motion } from "framer-motion";
import QuoteGenerator from "../../components/QuoteGenerator";

export default function QuotePage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center pt-20 pb-12"
            >
                <h1 className="font-medium text-6xl">
                    Get a <span className="primary-red">Project Quote</span>
                </h1>
                <p className="mt-5 text-lg secondary-text-red max-w-2xl mx-auto">
                    Select what you need and get an instant, no-obligation estimate for your next project.
                    <br />
                    This helps us understand your requirements and provide accurate pricing.
                </p>
            </motion.div>

            {/* Quote Generator Section */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full bg-[var(--off-white)] py-20"
            >
                <div className="w-[70%] mx-auto">
                    <QuoteGenerator />
                </div>
            </motion.section>

            {/* Additional Info Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full py-20"
            >
                <div className="w-[80%] mx-auto text-center">
                    <h2 className="text-3xl font-medium text-[var(--foreground)] mb-8">What Happens Next?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 border border-[var(--divider-color)] shadow-sm">
                            <div className="w-12 h-12 bg-[var(--primary-red)] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">1</div>
                            <h3 className="text-xl font-semibold mb-3">Review Your Quote</h3>
                            <p className="text-gray-600">We'll review your requirements and provide a detailed estimate within 24 hours.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 border border-[var(--divider-color)] shadow-sm">
                            <div className="w-12 h-12 bg-[var(--primary-red)] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">2</div>
                            <h3 className="text-xl font-semibold mb-3">Schedule a Call</h3>
                            <p className="text-gray-600">We'll schedule a consultation to discuss your project in detail and answer any questions.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 border border-[var(--divider-color)] shadow-sm">
                            <div className="w-12 h-12 bg-[var(--primary-red)] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">3</div>
                            <h3 className="text-xl font-semibold mb-3">Start Building</h3>
                            <p className="text-gray-600">Once we're aligned, we'll begin bringing your vision to life with regular updates throughout.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
} 