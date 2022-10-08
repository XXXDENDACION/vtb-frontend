import React from "react";
import { SideMenu } from "./SideMenu";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

export const SideMenuWrapper = ({ children }) => {
    const router = useRouter();
    console.log(router)
    const isShowSidebar = !(router.pathname === '/login') && !(router.pathname === '/register');
    return (
        <Box display="flex" alignItems="center">
            {isShowSidebar && <SideMenu />}
            {children}
        </Box>
    )
}