import { NextPage } from "next";
import { Hero, About } from "@/components/features";

interface PageProps {}

const aboutData = {
  content: `Hi there! I am Russell Numo currently attending the University of applied sciences in Amsterdam. I have a bit of an affinity when it comes to frontend development especially for the web :). I am always eager to learn new things and immersive myself in new technologies. Okay now you are allowed to explore the rest of the site.`,
};

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <Hero />
      <About data={aboutData} />
    </>
  );
};

export default Page;
