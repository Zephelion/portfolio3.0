import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { BaseLayout } from "@/components/layouts/BaseLayout";

const App = ({ Component: Page, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS>
      <BaseLayout>
        <Page {...pageProps} />
      </BaseLayout>
    </ChakraProvider>
  );
};

export default App;
