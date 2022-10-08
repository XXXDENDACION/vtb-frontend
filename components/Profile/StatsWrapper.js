import React from "react";
import { Box } from "@chakra-ui/react";
import { Balance } from "./Balance";
import { Inventory } from "./Inventory";
import { RateTable } from "./RateTable";

export const StatsWrapper = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box
                w='380px'
            >
                <Balance />
                <Inventory />
                <RateTable />
            </Box>
        </Box>
    )
}