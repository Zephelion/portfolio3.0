import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { theme } from "@/theme/theme";
import { Loader } from "@/components/features";
import { DefaultSeo } from "next-seo";
import ReactLenis from "lenis/react";

const App = ({ Component: Page, pageProps, router }: AppProps) => {
  return (
    <>
      <DefaultSeo {...pageProps.seo} />

      <ChakraProvider theme={theme} resetCSS>
        <ReactLenis root autoRaf>
          <BaseLayout>
            <Page {...pageProps} />
          </BaseLayout>
        </ReactLenis>
        {router.pathname === "/" && <Loader />}
      </ChakraProvider>
    </>
  );
};

export default App;
