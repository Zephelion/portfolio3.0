import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { theme } from "@/theme/theme";
import { Loader, CustomCursor } from "@/components/features";
import { DefaultSeo } from "next-seo";
import ReactLenis from "lenis/react";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";

const App = ({ Component: Page, pageProps, router }: AppProps) => {
  return (
    <>
      <DefaultSeo {...pageProps.seo} />

      <ChakraProvider theme={theme} resetCSS>
        <CustomCursor />
        <ReactLenis root autoRaf>
          <BaseLayout>
            <AnimatePresence mode="wait">
              <Page key={router.route} {...pageProps} />
            </AnimatePresence>
          </BaseLayout>
        </ReactLenis>
        {router.pathname === "/" && <Loader />}
      </ChakraProvider>
    </>
  );
};

export default App;
