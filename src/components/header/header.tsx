import {HeaderProps} from "@/props/components/header";
import Link from "next/link";

export default function Header(props: HeaderProps) {
    if (!props.shown) {
        return <></>;
    }

    return (
        <header>
            <div className={"w-full h-px bg-[var(--secondary-background)]"} />

            <div className={"grid grid-cols-2 pt-5 pb-5 xl:py-8 xl:grid-cols-3 xl:w-[80%] xl:ml-auto xl:mr-auto"}>
                <div className={"mr-auto"}>
                    <Link href={"/"} className={"font-bold text-2xl text-[var(--foreground)]"}>
                        Resolvo
                    </Link>
                </div>

                <div className={"hidden xl:block xl:ml-auto xl:mr-auto"}>
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
                </div>

                <div className={"ml-auto"}>
                    <a
                        href={"mailto:logan@resolvo.dev"}
                        className={"navbar-button"}
                    >
                        Contact Us
                    </a>
                </div>
            </div>

        </header>
    );
}