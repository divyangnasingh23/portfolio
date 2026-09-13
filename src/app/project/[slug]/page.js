import { notFound } from "next/navigation";
import { projects, personalInfo } from "@/data/projectsData";
import CaseStudyView from "@/components/CaseStudyView";

// Generate Static Params for Vercel / SSG
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic SEO & OpenGraph metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${personalInfo.name}`,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for seamless end-of-page navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return <CaseStudyView project={project} nextProject={nextProject} />;
}
