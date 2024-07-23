import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Heading } from "@chakra-ui/react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { ProjectPageTransition } from "@/components/features";
import Link from "next/link";

interface PageProps {
  project: Project;
}

const Page: NextPage<PageProps> = ({ project }) => {
  if (!project) {
    return null;
  }

  const { title } = project;
  return (
    <ProjectPageTransition>
      <Heading size="h1">{title}</Heading>
      <Link href="/plantswap-identifier">plantswap identifier</Link>
      <Link href="/syncmusic">syncmusic</Link>
      <Link href="/rijksmusuem">rijksmuseum</Link>
    </ProjectPageTransition>
  );
};

const fetchProjectData = async (slug: string) => {
  const projectData = projects.find((project) => project.href === slug);

  return projectData;
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Check if `context.params` is defined
  if (!context.params || typeof context.params.slug !== "string") {
    return {
      notFound: true,
    };
  }

  const { slug } = context.params;
  const project = await fetchProjectData(slug);

  return {
    props: {
      project,
      seo: project?.seo,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.href },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Page;
