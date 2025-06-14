import Image from "next/image"
import Link from "next/link";
import { getFeaturedProjects, Project } from "../lib/mdx";
import ClientButtons from "../components/ClientButtons";

import website_example from "../../public/website_example.png"

import trusted_by_analyse from "../../public/trusted-by/trusted_by_analyse.webp"
import trusted_by_zinara from "../../public/trusted-by/trusted_by_zinara-1.webp"
import trusted_by_cherubs from "../../public/trusted-by/trusted_by_cherubs_childrenswear.webp"
import trusted_by_pavise from "../../public/trusted-by/trusted_by_pavise-1.webp"
import trusted_by_validate from "../../public/trusted-by/trusted_by_validate.png"
import trusted_by_heli from "../../public/trusted-by/trusted_by_heli.webp"

export default async function Home() {
    const featuredProjects: Project[] = getFeaturedProjects();

    return (
        <main>
            {/* Website hook section */}
            <div className={"text-center pt-20"}>
                <h1 className={"font-medium text-6xl"}>
                    We <span className={"primary-red"}>Resolve Problems</span> Instead
                    <br/>
                    Of Re-Solving Them
                </h1>

                <p className={"mt-5 text-lg secondary-text-red"}>
                    We believe problems should only have to be solved once and once only.
                    <br/>
                    Our software is designed to last from the beginning.
                </p>

                <ClientButtons />

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
                    Trusted by <span className={"primary-red underline"}>30+</span> businesses both big and small
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

                {/* Divider between trusted by and how we work */}
                <div className={"pt-15 pb-25 w-[80%] ml-auto mr-auto"}>
                    <div className={"w-full h-0.5 bg-[var(--divider-color)]"} />
                </div>

                {/* how we work section */}
                <div className={"w-[80%] ml-auto mr-auto text-left"}>
                    <h2 className={"font-medium text-5xl"}>
                        How we work in
                        <br/>
                        just <span className={"primary-red underline"}>3 Steps</span>
                    </h2>
                </div>
            </div>

            {/* Featured Work Section */}
            <div className={"w-full bg-[var(--secondary-background)] pt-10 pb-10 relative overflow-hidden transform -skew-y-3"}>
                <div className={"w-[80%] ml-auto mr-auto text-left relative z-10 transform skew-y-3"}>
                    <div className={"grid grid-cols-2 gap-8"}>
                        {featuredProjects.map((project) => (
                            <div key={project.slug} className={"rounded-lg overflow-hidden"}>
                                <Image
                                    src={project.frontmatter.image}
                                    alt={project.frontmatter.name}
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                    className="object-cover h-48"
                                />
                                <div className={"p-6"}>
                                    <h3 className={"font-medium text-2xl text-white mb-2"}>{project.frontmatter.name}</h3>
                                    <p className={"text-gray-400 mb-4"}>{project.frontmatter.description}</p>
                                    <Link href={`/work/${project.slug}`} className={"text-white flex items-center"}>
                                        <span className={"bg-gradient-to-t from-white to-white bg-no-repeat bg-bottom bg-[length:100%_1px]"}>
                                            View Detail
                                        </span>
                                        <span className={"ml-1"}>&gt;</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    );
}
