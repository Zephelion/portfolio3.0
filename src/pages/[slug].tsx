import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Heading } from "@chakra-ui/react";
import { projects } from "@/data/projects";
import { Project } from "@/types";

interface PageProps {
  project: Project;
}

const Page: NextPage<PageProps> = ({ project }) => {
  if (!project) {
    return null;
  }

  const { title } = project;
  return (
    <>
      <Heading size="h1">{title}</Heading>
    </>
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
