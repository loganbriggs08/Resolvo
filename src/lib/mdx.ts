import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  slug: string;
  frontmatter: {
    name: string;
    image: string;
    description: string;
    featured?: boolean;
    date: string;
    client: string;
    technologies: string[];
    duration: string;
    role: string;
    challenge: string;
    solution: string;
  };
  content?: string;
}

export function getProjects(): Project[] {
  const postsDirectory = path.join(process.cwd(), 'src', 'previous-work');
  const filenames = fs.readdirSync(postsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      frontmatter: data as Project['frontmatter'],
      content,
    };
  });

  return projects.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getProjects();
  const featuredProjects = allProjects.filter(project => project.frontmatter.featured);
  return featuredProjects.slice(0, 2); // Return a maximum of two featured projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  const filePath = path.join(process.cwd(), 'src', 'previous-work', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return undefined;
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);
  return {
    slug,
    frontmatter: data as Project['frontmatter'],
    content,
  };
} 