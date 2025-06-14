import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getProjects, Project } from "../../../../src/lib/mdx";
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-24">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.frontmatter.name}</h1>
        <p className="text-gray-600 mb-8">{project.frontmatter.description}</p>
        {project.content && <MDXRemote source={project.content} />}
      </article>
    </main>
  );
} 