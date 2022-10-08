import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export const Balance = () => {

    return (
        <SimpleGrid
            columns={2}
            spacing={10}
        >
            <Box
               padding="15px 15px 25px 15px"
               backgroundColor="white"
               boxShadow="md"
               borderRadius="20px"
               textAlign="center"
               fontWeight="bold"
            >
                <Text
                    fontSize='sm'
                    color="#A0AEC0"
                >
                    ID
                </Text>
                <Text
                    fontSize='lg'
                    color="#2D3748"
                >
                    473265
                </Text>
            </Box>
            <Box
                padding="15px 15px 25px 15px"
                backgroundColor="white"
                boxShadow="md"
                borderRadius="20px"
                textAlign="center"
                fontWeight="bold"
            >
                <Text
                    fontSize='sm'
                    color="#A0AEC0"
                >
                    Баланс
                </Text>
                <Text
                    fontSize='lg'
                    color="#2D3748"
                >
                    50 Р
                </Text>
            </Box>
        </SimpleGrid>
    )
}