import React from "react";
import { Flex } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { UsersContiner } from "../../components/UsersContainer";
import { ApproveContainer } from "../../components/ApproveContainer";

const AdminPage = () => {
  return (
    <>
      <Flex flexDirection="column" ml="57px" width="100%">
        <Flex>
          <PageTitle
            icon="/admin-shield.svg"
            iconWidth={53}
            iconHeight={53}
            title="Панель администратора"
            fontSize="18px"
          />
        </Flex>
        <UsersContiner />
        <ApproveContainer />
      </Flex>
    </>
  );
};

export default AdminPage;
