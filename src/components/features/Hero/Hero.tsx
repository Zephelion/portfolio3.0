import { Marquee, Section } from "@/components/features";

export const Hero = () => {
  return (
    <Section isFullScreen>
      <Marquee text="Frontend developer" baseVelocity={-150} />
      <Marquee text="Frontend developer" baseVelocity={150} />
    </Section>
  );
};
