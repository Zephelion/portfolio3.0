import { NextPage } from "next";
import { Hero } from "@/components/features";

interface PageProps {}

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Page;
