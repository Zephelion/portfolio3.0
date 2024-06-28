import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import { theme } from "@/theme/theme";

const App = ({ Component: Page, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <BaseLayout>
        <Page {...pageProps} />
      </BaseLayout>
    </ChakraProvider>
  );
};

export default App;
