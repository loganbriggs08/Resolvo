'use client';

import {HeaderProps} from "@/props/components/header";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header(props: HeaderProps) {
    if (!props.shown) {
        return <></>;
    }

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={"w-full h-px bg-[var(--secondary-background)]"} />

            <div className={"grid grid-cols-2 pt-5 pb-5 xl:py-8 xl:grid-cols-3 xl:w-[80%] xl:ml-auto xl:mr-auto"}>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={"mr-auto"}
                >
                    <Link href={"/"} className={"font-bold text-2xl text-[var(--foreground)]"}>
                        Resolvo
                    </Link>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={"hidden xl:block xl:ml-auto xl:mr-auto"}
                >
                    <div className={"flex gap-8"}>
                        <Link
                            href={"/"}
                            className={"font-medium hover:text-[var(--primary-red)] transition-colors duration-200"}
                        >
                            Home
                        </Link>

                        <Link
                            href={"/"}
                            className={"font-medium whitespace-nowrap hover:text-[var(--primary-red)] transition-colors duration-200"}
                        >
                            Our Work
                        </Link>

                        <Link
                            href={"/"}
                            className={"font-medium whitespace-nowrap hover:text-[var(--primary-red)] transition-colors duration-200"}
                        >
                            About Us
                        </Link>

                        <Link
                            href={"/"}
                            className={"font-medium whitespace-nowrap hover:text-[var(--primary-red)] transition-colors duration-200"}
                        >
                            Get a Quote
                        </Link>

                        <Link
                            href={"/"}
                            className={"font-medium whitespace-nowrap hover:text-[var(--primary-red)] transition-colors duration-200"}
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className={"ml-auto flex gap-3 items-center"}
                >
                    <Link
                        href="/#get-a-quote"
                        className="navbar-primary-button"
                    >
                        Get a Quote
                    </Link>
                    <a
                        href={"mailto:logan@resolvo.dev"}
                        className={"navbar-button"}
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>

        </motion.header>
    );
}