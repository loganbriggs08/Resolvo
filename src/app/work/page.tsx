import Link from 'next/link';
import Image from 'next/image';
import { getProjects, Project } from "../../../src/lib/mdx";

export default function WorkPage() {
  const projects: Project[] = getProjects();

  return (
    <main className="min-h-screen px-4 py-16 md:px-12 xl:px-32 bg-[var(--background)]">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-medium text-[var(--foreground)] mb-2">Our Previous Work</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Explore a selection of our recent projects and see how we've helped clients achieve their goals with robust, lasting software.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-white rounded-lg overflow-hidden border border-[var(--divider-color)] shadow-sm hover:border-[var(--primary-red)] hover:shadow-md transition-all duration-200 flex flex-col"
          >
            <Image
              src={project.frontmatter.image}
              alt={project.frontmatter.name}
              width={500}
              height={300}
              layout="responsive"
              className="object-cover h-48 rounded-t-lg"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-medium text-2xl text-[var(--foreground)] mb-2">{project.frontmatter.name}</h3>
              <p className="text-gray-500 mb-4 flex-1">{project.frontmatter.description}</p>
              <Link href={`/work/${project.slug}`} className="text-[var(--primary-red)] flex items-center font-medium hover:underline">
                <span className="bg-gradient-to-t from-[var(--primary-red)] to-[var(--primary-red)] bg-no-repeat bg-bottom bg-[length:100%_1.5px]">View Detail</span>
                <span className="ml-1">&gt;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 