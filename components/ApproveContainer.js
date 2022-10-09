import { Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

export const ApproveContainer = () => {
  return (
    <Flex
      flexDirection="column"
      bgColor="#FFF"
      borderRadius="20px"
      p="20px 30px"
      boxShadow="md"
      width="100%"
      mt="24px"
    >
      <Text fontWeight={700} fontSize="18px" mb="20px">
        Апрув заданий
      </Text>
      <Flex justifyContent="space-between">
        <Flex>
          <Text color="#718096" fontSize="11px" minWidth="160px">
            Имя пользователя
          </Text>
          <Text color="#718096" fontSize="11px" minWidth="100px">
            ID
          </Text>
          <Text color="#718096" fontSize="11px" minWidth="100px">
            Задание
          </Text>
        </Flex>
        <Flex></Flex>
      </Flex>

      <UserRow
        name={"Danil Polienko"}
        id={12}
        balance={424}
        power={32}
        history=""
      />
      <UserRow
        name={"Danil Polienko"}
        id={12}
        balance={424}
        power={32}
        history=""
      />
      <UserRow
        name={"Danil Polienko"}
        id={12}
        balance={424}
        power={32}
        history=""
      />
      <UserRow
        name={"Danil Polienko"}
        id={12}
        balance={424}
        power={32}
        history=""
      />
      <UserRow
        name={"Danil Polienko"}
        id={12}
        balance={424}
        power={32}
        history=""
      />
    </Flex>
  );
};

const UserRow = ({ name, id }) => {
  return (
    <>
      <Flex
        borderTop="1px solid #E2E8F0"
        justifyContent="space-between"
        mt="10px"
      >
        <Flex>
          <Text
            color="#2D3748"
            fontSize="14px"
            fontWeight={700}
            minWidth="160px"
            mt="10px"
          >
            {name}
          </Text>
          <Text color="#718096" minWidth="100px" mt="10px">
            {id}
          </Text>
          <Text color="#718096" minWidth="100px" mt="10px">
            Митинг
          </Text>
        </Flex>
        <Flex columnGap="30px">
          <Button
            bgColor="#1A365D"
            height="24px"
            color="#FFF"
            minWidth="100px"
            fontSize="14px"
            _hover="none"
            mt="10px"
          >
            Подтвердить
          </Button>
          <Button
            bgColor="#FFF"
            height="24px"
            color="#1A365D"
            minWidth="100px"
            border="1px solid #1A365D"
            fontSize="14px"
            _hover="none"
            mt="10px"
          >
            Отклонить
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
