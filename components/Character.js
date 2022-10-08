import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";

export const Character = ({ power }) => {
  return (
    <Flex flexDirection="column" mt="30px">
      <Text fontWeight="700" mb="24px" ml="19px">
        Персонаж
      </Text>
      <Flex
        bgColor="#FFF"
        width="588px"
        height={604}
        borderRadius="20px"
        position="relative"
        justifyContent="center"
      >
        <Flex p="42px 0 107px 0">
          <Image src="/character.png" alt="" />
        </Flex>
        <Image
          src="/sword.svg"
          alt=""
          position="absolute"
          bottom="42px"
          left="44px"
          width={164}
          height={164}
        />
        <Image src="" alt="" />
        <Flex
          position="absolute"
          bottom="30px"
          right="104px"
          alignItems="center"
        >
          <Text fontSize="40px" lineHeight="56px">
            Сила:&nbsp;
          </Text>

          <Text color="#C53030" fontSize="50px" fontWeight="900">
            {power ? power : 0}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
