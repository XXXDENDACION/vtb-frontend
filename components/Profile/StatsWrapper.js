import React from "react";
import { Box } from "@chakra-ui/react";
import { Balance } from "./Balance";
import { Inventory } from "./Inventory";

export const StatsWrapper = () => {
    return (
        <Box
            // display="flex"
            // flexDirection="column"
            // alignItems="center"
        >
            <Balance />
            <Inventory />
        </Box>
    )
}