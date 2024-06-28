import { rem } from "polished";
import { ChakraTheme } from "@chakra-ui/react";

// Want to have both rem and px values be available for space, as this gives the choice to
// developers to pick whether the space should scale with the font size or not.
// For more info: https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/
export const space: ChakraTheme["space"] = {
  "space-4": rem(4), // 0.25rem
  "space-6": rem(6), // 0.375rem
  "space-8": rem(8), // 0.5rem
  "space-10": rem(10), // 0.625rem
  "space-12": rem(12), // 0.75rem
  "space-14": rem(14), // 0.875rem
  "space-16": rem(16), // 1rem
  "space-18": rem(18), // 1rem
  "space-20": rem(20), // 1.25rem
  "space-22": rem(22), // 1.375rem
  "space-24": rem(24), // 1.5rem
  "space-26": rem(26), // 1.625rem
  "space-28": rem(28), // 1.75rem
  "space-30": rem(30), // 1.875rem
  "space-32": rem(32), // 2rem
  "space-34": rem(34), // 2.125rem
  "space-36": rem(36), // 2.25rem
  "space-40": rem(40), // 2.5rem
  "space-44": rem(44), // 2.75rem
  "space-48": rem(48), // 3rem
  "space-52": rem(52), // 3.25rem
  "space-56": rem(56), // 3.5rem
  "space-60": rem(60), // 3.75rem
  "space-64": rem(64), // 4rem
  "space-72": rem(72), // 4.5rem
  "space-76": rem(76), // 4.75rem
  "space-80": rem(80), // 5rem
  "space-88": rem(88), // 5.5rem
  "space-94": rem(94), // 5.875rem
  "space-96": rem(96), // 6rem
  "space-100": rem(100), // 6.25rem
  "space-104": rem(104), // 6.5rem
  "space-112": rem(112), // 7rem
  "space-120": rem(120), // 7.5rem
  "space-128": rem(128), // 8rem
  "space-136": rem(136), // 8.5rem
  "space-144": rem(144), // 9rem
  "space-152": rem(152), // 9.5rem
  "space-156": rem(156), // 9.75rem
  "space-160": rem(160), // 10rem
  "space-168": rem(168), // 10.5rem
  "space-172": rem(172), // 10.75rem
  "space-176": rem(176), // 11rem
  "space-188": rem(188), // 11.75rem
  "space-192": rem(192), // 12rem
  "space-200": rem(200), // 12.5rem
  "space-226": rem(226), // 14.125rem
  "space-232": rem(232), // 14.5rem
  "space-272": rem(272), // 17rem
  "space-288": rem(288), // 18rem
  "space-328": rem(328), // 20.5rem
  "space-384": rem(384), // 24rem
  "space-400": rem(400), // 25rem
};
