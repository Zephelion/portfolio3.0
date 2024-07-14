import { NextPage } from "next";
import { Hero, About, ProjectsSection } from "@/components/features";

interface PageProps {}

const heroData = {
  marquee: [
    { text: "Frontend developer", baseVelocity: -150 },
    { text: "Frontend developer", baseVelocity: 150 },
  ],
  availability: true,
};

const aboutData = {
  content: `Hi there! I am Russell Numo currently attending the University of applied sciences in Amsterdam where I am following the course Communication Multimedia Design. I have a bit of an affinity when it comes to frontend development especially for the web :). I am always eager to learn new things and immersive myself in new technologies. Feel free to poke around my site—who knows, you might find something cool or even a hidden Easter egg! Enjoy your stay!`,
};

const projectsData = {
  projects: [
    {
      title: "Plantswap identifier",
      coverImage: "/images/plantswapcover.webp",
      href: "plantswap-identifier",
    },
    {
      title: "Syncmusic",
      coverImage: "/images/syncmusiccover.webp",
      href: "syncmusic",
    },
    {
      title: "Rijksmusuem",
      coverImage: "/images/rijksmuseumcover.webp",
      href: "rijksmusuem",
    },
  ],
};

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <Hero data={heroData} />
      <About data={aboutData} />
      <ProjectsSection data={projectsData} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      seo: {
        title: "Russell Numo • Frontend developer",
        description:
          "Welcome to Russell Numo's portfolio. Explore my work and projects.",
        keywords: "Russell Numo, Portfolio, Web Development, Frontend",
        openGraph: { type: "website" },
      },
    },
  };
};

export default Page;
