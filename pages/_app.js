import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import { SideMenuWrapper } from "../components/SideMenuWrapper";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <RecoilRoot>
            <SideMenuWrapper>
                <Component {...pageProps} />
            </SideMenuWrapper>
        </RecoilRoot>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
