import { NextPage } from "next";
import { Hero, About } from "@/components/features";
import Head from "next/head";

interface PageProps {}

const aboutData = {
  // content: `Hi there! I am Russell Numo currently attending the University of applied sciences in Amsterdam. I have a bit of an affinity when it comes to frontend development especially for the web :). I am always eager to learn new things and immersive myself in new technologies. Okay now you are allowed to explore the rest of the site.`,
  content: [
    "Hi there! I am Russell Numo currently attending the University of applied sciences in Amsterdam.",
    // "I have a bit of an affinity when it comes to frontend development especially for the web :).",
    // "I am always eager to learn new things and immersive myself in new technologies.",
    // "Okay now you are allowed to explore the rest of the site.",
  ],
};

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <Head>
        <title>Russell Numo • Frontend developer</title>
        <meta
          name="description"
          content="Welcome to Russell Numo's portfolio. Explore my work and projects."
        />
        <meta
          name="keywords"
          content="Russell Numo, Portfolio, Web Development, Frontend"
        />
        <meta name="author" content="Russell Numo" />
      </Head>
      <Hero />
      <About data={aboutData} />
    </>
  );
};

export default Page;
