// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectLayout from "@/components/ProjectLayout";

interface Screenshot {
  src: string;
  title: string;
}

interface CodeSnippet {
  title: string;
  code: string;
}

interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  details?: { title: string; subtitle: string };
  features?: string[];
  screenshots?: Screenshot[];
  codeSnippets?: CodeSnippet[];
  tech?: string[];
  github?: string;
  live?: string;
}

// 👇 clé ici : params est maintenant une *Promise*
interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project: Project | undefined = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <Navbar />
      <ProjectLayout
        image={project.image}
        title={project.title}
        description={project.description}
        features={project.features}
        screenshots={project.screenshots}
        codeSnippets={project.codeSnippets}
        techStack={project.tech}
        github={project.github}
        live={project.live}
      />
      <Footer />
    </>
  );
}
