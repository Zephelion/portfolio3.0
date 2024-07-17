import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Heading } from "@chakra-ui/react";
import { projects } from "@/data/projects";

interface PageProps {
  project: Project;
}

interface Project {
  title: string;
  coverImage: string;
  href: string;
  description: string;
}

const Page: NextPage<PageProps> = ({ project }) => {
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
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const { slug } = context.params;
  const project = await fetchProjectData(slug as string); // Type assertion is safe here

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { slug: "plantswap-identifier" } },
    { params: { slug: "syncmusic" } },
    { params: { slug: "rijksmusuem" } },
  ];

  return {
    paths,
    fallback: true,
  };
};

export default Page;
