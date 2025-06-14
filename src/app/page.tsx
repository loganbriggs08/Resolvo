import { getFeaturedProjects } from "../lib/mdx";
import AnimatedHome from "../components/AnimatedHome";

export default async function Home() {
    const featuredProjects = getFeaturedProjects();
    return <AnimatedHome featuredProjects={featuredProjects} />;
}
