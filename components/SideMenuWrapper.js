import React from "react";
import { SideMenu } from "./SideMenu";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

export const SideMenuWrapper = ({ children }) => {
    const router = useRouter();
    const isShowSidebar = !(router.pathname === '/login') && !(router.pathname === '/register');

    return (
        <Box
            display="flex"
            alignItems="start"
            h='100%'
            p='50px 0 0 20px'
        >
            {isShowSidebar && <SideMenu />}
            {children}
        </Box>
    )
}