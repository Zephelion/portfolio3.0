import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { theme } from "@/theme/theme";
import { Loader } from "@/components/features";

const App = ({ Component: Page, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <BaseLayout>
        <Page {...pageProps} />
      </BaseLayout>
      {router.pathname === "/" && <Loader />}
    </ChakraProvider>
  );
};

export default App;
