import React from "react";
import { Flex } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Character } from "../../components/Character";

const ProfilePage = () => {
  return (
    <Flex bgColor="#F7FAFC" height="100vh" width="100%">
      <Flex mt="35px" ml="56px" flexDirection="column">
        <Flex ml="19px">
          <PageTitle
            iconWidth={70}
            iconHeight={90}
            title={`Приветствую, ${"Карлен"}`}
            fontSize="36px"
            icon="/coat.svg"
          />
        </Flex>
        <Character power={75} />
      </Flex>
    </Flex>
  );
};

export default ProfilePage;
