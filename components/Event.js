import { Flex, Link, Image, Text } from "@chakra-ui/react";

export const Event = ({ title, description }) => {
  return (
    <Flex
      bgColor="#FFF"
      borderRadius="20px"
      height="290px"
      p="30px 21px"
      mt="24px"
      justifyContent="space-between"
    >
      <Flex flexDirection="column" justifyContent="space-between">
        <Flex flexDirection="column">
          <Text fontWeight="700">{title}</Text>
          <Text mr="10px" color="#A0AEC0" fontSize="14px">
            {description}
          </Text>
        </Flex>
        <Link href="/">Подробнее</Link>
      </Flex>
      <Flex>
        <Image src="/meetup.png" alt="" />
      </Flex>
    </Flex>
  );
};
