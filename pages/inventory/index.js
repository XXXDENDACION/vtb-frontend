import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Item } from "../../components/Inventory/Item";

const Inventory = () => {
    return (
        <Box
            h="100%"
            w="100%"
            boxShadow="md"
            p="15px 30px"
            backgroundColor="white"
            ml="30px"
            borderRadius="20px"
        >
            <PageTitle title="Инвентарь" fontSize="24px" />
            <SimpleGrid
                columns={5}
                spacing={6}
                mt="20px"
                height="calc(100vh - 150px)"
                overflow="auto"
            >
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </SimpleGrid>
        </Box>
    )
}

export default Inventory;