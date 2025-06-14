import {HeaderProps} from "@/props/components/header";

export default function Header(props: HeaderProps) {
    if (!props.shown) {
        return <></>;
    }

    return (
        <header>
            <div className={"grid grid-cols-2 pt-5 pb-5 xl:pt-8 xl:pb-8 xl:grid-cols-3 xl:w-[80%] xl:ml-auto xl:mr-auto"}>
                <div className={"mr-auto"}>
                    <p>Resolvo</p>
                </div>

                <div className={"hidden xl:block xl:ml-auto xl:mr-auto"}>
                    <div className={"grid grid-cols-5 gap-5"}>
                        <a
                            href={"/"}
                            className={"font-medium"}
                        >
                            Home
                        </a>

                        <a
                            href={"/"}
                            className={"font-medium whitespace-nowrap"}
                        >
                            Our Work
                        </a>

                        <a
                            href={"/"}
                            className={"font-medium whitespace-nowrap"}
                        >
                            About Us
                        </a>

                        <a
                            href={"/"}
                            className={"font-medium whitespace-nowrap"}
                        >
                            Get a Quote
                        </a>

                        <a
                            href={"/"}
                            className={"font-medium whitespace-nowrap"}
                        >
                            Contact Us
                        </a>
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

            <div className={"w-full h-0.5 bg-[var(--green-border)]"} />
        </header>
    );
}