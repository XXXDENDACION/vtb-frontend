import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { StatsWrapper } from "../../components/Profile/StatsWrapper";

const ProfilePage = () => {
  return (
    <SimpleGrid
        h='100%'
        w='100%'
        columns={2}
        spacing={10}
    >
        <Box w='100%' h='100%'>

        </Box>
        <Box w='400px' h='100%'>
            <StatsWrapper />
        </Box>
    </SimpleGrid>
  );
};

export default ProfilePage;
