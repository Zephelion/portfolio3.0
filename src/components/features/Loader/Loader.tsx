import { Section } from "@/components/features";
import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MotionBox } from "../MotionBox";

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Set up an interval to increment the progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Stop the interval when progress reaches 100

          setTimeout(() => setShouldAnimate(true), 2000); // Wait for 500ms before animating out
          return 100;
        }
        return prevProgress + 1; // Increment progress
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: shouldAnimate ? "-100vh" : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Section
        height="100vh"
        width="100vw"
        bg="black"
        position="fixed"
        top="0"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Heading as="span" color="white" fontSize="9xl">
          {progress}%
        </Heading>
      </Section>
    </motion.div>
  );
};

// const MotionSection = motion(Section);
