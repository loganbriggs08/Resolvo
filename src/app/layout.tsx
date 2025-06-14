import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/header";


export const metadata: Metadata = {
    title: "Resolvo Development",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <Header shown={true} />

            <body>
                {children}
            </body>
        </html>
    );
}
