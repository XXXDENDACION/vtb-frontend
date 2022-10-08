import { Button, Flex, Image, Text } from "@chakra-ui/react";

export const Event = ({ title, description }) => {
  return (
    <Flex
      bgColor="#FFF"
      borderRadius={20}
      height={290}
      p="30px 21px"
      mt={24}
      justifyContent="space-between"
    >
      <Flex flexDirection="column" justifyContent="space-between">
        <Flex flexDirection="column">
          <Text fontWeight={700}>{title}</Text>
          <Text mr={10} color="#A0AEC0" fontSize={14}>
            {description}
          </Text>
        </Flex>
        <Button
          borderRadius={15}
          bgColor="#1A365D"
          color="#FFF"
          height={57}
          width={222}
          _hover="none"
        >
          Принять
        </Button>
      </Flex>
      <Flex>
        <Image src="/meetup.png" alt="" />
      </Flex>
    </Flex>
  );
};
