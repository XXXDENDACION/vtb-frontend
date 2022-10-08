import React from "react";
import Image from "next/image";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export const Inventory = () => {
    const items = [
        {img: '', title: 'Шлем', power: 5},
        {img: '', title: 'Броня', power: 5},
        {img: '', title: 'Оружие 1', power: 5},
        {img: '', title: 'Оружие 2', power: 5}
    ];

    return (
        <Box mt="30px">
            <Text
                fontSize="lg"
                fontWeight="700"
                color="#2D3748"
                mb="24px"
                ml="15px"
            >
                Инвентарь
            </Text>
            <Box
                boxShadow="md"
                borderRadius="20px"
                p="25px 35px"
                backgroundColor="white"
            >
                <SimpleGrid
                    columns={2}
                    spacing={20}
                >
                    {items.map(i => (
                        <Box
                            key={i.title}
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                mb="12px"
                            >
                                <Image
                                    src={i.img}
                                    width={100}
                                    height={100}
                                />
                            </Box>
                            <Text
                                fontSize="sm"
                                fontWeight="500"
                                mb="3px"
                            >
                                {i.title}
                            </Text>
                            <Text
                                fontSize="sm"
                                fontWeight="500"
                                color="#C53030"
                            >
                                {i.power}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    )
}