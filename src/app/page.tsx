"use client"

import Image from "next/image"
import {useRouter} from "next/navigation";

import website_example from "../../public/website_example.png"

import trusted_by_analyse from "../../public/trusted-by/trusted_by_analyse.webp"
import trusted_by_zinara from "../../public/trusted-by/trusted_by_zinara-1.webp"
import trusted_by_cherubs from "../../public/trusted-by/trusted_by_cherubs_childrenswear.webp"
import trusted_by_pavise from "../../public/trusted-by/trusted_by_pavise-1.webp"
import trusted_by_validate from "../../public/trusted-by/trusted_by_validate.png"
import trusted_by_heli from "../../public/trusted-by/trusted_by_heli.webp"



export default function Home() {
    const router = useRouter();

    return (
        <main>
            {/* Website hook section */}
            <div className={"text-center pt-20"}>
                <h1 className={"font-medium text-6xl"}>
                    We <span className={"primary-green"}>Resolve Problems</span> Instead
                    <br/>
                    Of Re-Solving Them
                </h1>

                <p className={"mt-5 text-lg secondary-text-green"}>
                    We believe problems should only have to be solved once and once only.
                    <br/>
                    Our software is designed to last from the beginning.
                </p>

                <div className={"flex flex-row mt-7 justify-center"}>
                    <button
                        onClick={() => {router.push("/work")}}
                        className={"primary-button"}
                    >
                        View Our Work
                    </button>

                    <div className={"ml-2 mr-2"} />

                    <button
                        onClick={() => {router.push("/work")}}
                        className={"secondary-button"}
                    >
                        Get a Quote
                    </button>
                </div>

                <div className={"w-[70%] mt-15 ml-auto mr-auto"}>
                    <Image
                        src={website_example}
                        alt={"Website example"}
                    />
                </div>
            </div>

            {/* Trusted by section */}
            <div className={"w-full bg-[var(--off-white)] text-center mt-0 pt-20 pb-10"}>
                <h2 className={"font-medium text-4xl"}>
                    Trusted by <span className={"primary-green"}>30+</span> businesses both big and small
                </h2>

                <div className={"grid grid-cols-6 mt-15 gap-10 w-[70%] ml-auto mr-auto"}>
                    <div className={"mt-auto mb-auto ml-auto mr-auto"}>
                        <Image
                            src={trusted_by_analyse}
                            alt={"Trusted by company logo"}
                        />
                    </div>


                    <div className={"mt-auto mb-auto ml-auto mr-auto"}>
                        <Image
                            src={trusted_by_zinara}
                            alt={"Trusted by company logo"}
                        />
                    </div>

                    <div className={"mt-auto mb-auto ml-auto mr-auto"}>
                        <Image
                            src={trusted_by_cherubs}
                            alt={"Trusted by company logo"}
                        />
                    </div>

                    <div className={"mt-auto mb-auto ml-auto mr-auto"}>
                        <Image
                            src={trusted_by_pavise}
                            alt={"Trusted by company logo"}
                        />
                    </div>

                    <div className={"mt-auto mb-auto ml-auto mr-auto"}>
                        <Image
                            src={trusted_by_validate}
                            alt={"Trusted by company logo"}
                        />
                    </div>

                    <div className={"mt-auto mb-auto ml-auto mr-auto"}>
                        <Image
                            src={trusted_by_heli}
                            alt={"Trusted by company logo"}
                        />
                    </div>
                </div>
            </div>

        </main>
    );
}
