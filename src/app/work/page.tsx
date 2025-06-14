import Link from 'next/link';
import Image from 'next/image';
import { getProjects, Project } from "../../../src/lib/mdx";

export default function WorkPage() {
  const projects: Project[] = getProjects();

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold text-center mb-10">Our Previous Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={project.frontmatter.image}
              alt={project.frontmatter.name}
              width={500}
              height={300}
              layout="responsive"
              className="object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.frontmatter.name}</h2>
              <p className="text-gray-700 mb-4">{project.frontmatter.description}</p>
              <Link href={`/work/${project.slug}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 