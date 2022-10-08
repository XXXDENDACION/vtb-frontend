import React from "react";
import { Flex } from "@chakra-ui/react";
import { SideMenu } from "../../components/SideMenu";
import { PageTitle } from "../../components/PageTitle";

const ProfilePage = () => {
  return (
    <Flex bgColor="#F7FAFC" height="100vh" width="100%">
      <SideMenu />
      <Flex mt="35px" ml="20px">
        <PageTitle
          iconWidth={70}
          iconHeight={90}
          title={`Приветствую, ${"Карлен"}`}
          fontSize="36px"
          icon="/coat.svg"
        />
      </Flex>
    </Flex>
  );
};

export default ProfilePage;
