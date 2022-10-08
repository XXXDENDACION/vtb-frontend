import React from "react";
import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { StatsWrapper } from "../../components/Profile/StatsWrapper";
import { PageTitle } from "../../components/PageTitle";
import { Character } from "../../components/Character";

const ProfilePage = () => {
  return (
    <Grid
        h='100%'
        w='100%'
        templateColumns='auto 500px'
        gap={10}
    >
        <GridItem w='100%' h='100%'>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <PageTitle fontSize="36px" title="Приветствую, Карлен"/>
                <Character
                    power={20}
                />
            </Box>
        </GridItem>
        <GridItem w='400px' h='100%'>
            <StatsWrapper />
        </GridItem>
    </Grid>
  );
};

export default ProfilePage;
