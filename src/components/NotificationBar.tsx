"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotificationBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/quote"
        className="block w-full bg-[var(--primary-red)] text-white text-center py-2 px-4 text-sm font-normal border-b-2 border-black transition hover:bg-[var(--primary-red)]/90"
        style={{ textDecoration: "none" }}
      >
        Want an instant project estimate? Click Here
        <span
          className="inline-block align-middle ml-2"
          style={{ verticalAlign: "middle", height: "1.15em", width: "1.15em" }}
        >
          <svg width="1.15em" height="1.15em" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12H20M20 12L14 6M20 12L14 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
} 