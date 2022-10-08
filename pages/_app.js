import { Box, ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import { SideMenuWrapper } from "../components/SideMenuWrapper";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <RecoilRoot>
            <Box backgroundColor="#F7FAFC" h='100vh'>
                <SideMenuWrapper>
                    <Component {...pageProps} />
                </SideMenuWrapper>
            </Box>
        </RecoilRoot>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
