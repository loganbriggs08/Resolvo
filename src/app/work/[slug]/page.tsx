import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getProjects, Project } from "../../../../src/lib/mdx";
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectPageProps {
  params: { slug: string };
}

// Helper to extract headings from MDX content (simple regex for ## and ###)
function extractHeadings(content: string | undefined) {
  if (!content) return [];
  const headingRegex = /^##+\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push(match[1]);
  }
  return headings;
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

  const { tags } = project.frontmatter as { tags?: string[] };
  const headings = extractHeadings(project.content);

  return (
    <main className="min-h-screen flex flex-col md:flex-row max-w-7xl mx-auto px-4 pt-16 pb-16 gap-12">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 pr-8 text-[var(--secondary-text-red)]">
        {tags && tags.length > 0 && (
          <div className="mb-10">
            <div className="uppercase text-xs font-semibold tracking-wider mb-2 text-gray-400">Tags</div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: string, idx: number) => (
                <span key={idx} className="px-3 py-1 rounded bg-[var(--off-white)] text-[var(--foreground)] text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        {headings.length > 0 && (
          <div>
            <div className="uppercase text-xs font-semibold tracking-wider mb-2 text-gray-400">Table of Contents</div>
            <ul className="space-y-2 pl-2 border-l border-[var(--divider-color)]">
              {headings.map((heading, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${heading.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-[var(--foreground)] text-sm font-normal hover:text-[var(--primary-red)] hover:underline transition-colors"
                  >
                    {heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link href="/work" className="secondary-button mt-8 w-full text-center flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-5 align-middle">
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>Previous Work</span>
        </Link>
        <div className="flex-1" />
      </aside>
      {/* Main Content */}
      <section className="flex-1 min-w-0">
        <div className="mb-2 text-gray-400 text-sm">By Logan Briggs</div>
        <h1 className="text-3xl font-semibold mb-4 text-[var(--foreground)] leading-tight">{project.frontmatter.name}</h1>
        <p className="text-base text-gray-500 mb-8">{project.frontmatter.description}</p>
        <div className="w-full flex justify-center mb-12">
          <Image
            src={project.frontmatter.image}
            alt={project.frontmatter.name}
            width={900}
            height={500}
            className="rounded-xl w-full h-auto object-contain bg-[var(--secondary-background)]"
            priority
          />
        </div>
        <article className="prose lg:prose-xl mx-auto prose-invert">
          {project.content && <MDXRemote source={project.content} />}
        </article>
      </section>
    </main>
  );
} 