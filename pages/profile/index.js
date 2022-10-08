import { Flex } from "@chakra-ui/react";
import React from "react";
import { SideMenu } from "../../components/side-menu/side-menu";

const ProfilePage = () => {
  return (
    <Flex bgColor="#F7FAFC" height="100vh" width="100%">
      <SideMenu />
    </Flex>
  );
};

export default ProfilePage;
