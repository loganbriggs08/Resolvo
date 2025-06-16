import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/header";
import Link from "next/link";
import NotificationBar from "@/components/NotificationBar";

export const metadata: Metadata = {
    title: "Resolvo Development",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>
                <NotificationBar />
                <Header shown={true} />
                {children}
            </body>
        </html>
    );
}
