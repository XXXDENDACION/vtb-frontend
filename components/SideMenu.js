import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const navItems = [
  { icon: "/coat.svg", title: "Персонаж" },
  { icon: "/arch.svg", title: "Задания" },
  { icon: "/case.svg", title: "Инвентарь" },
  { icon: "/book.svg", title: "Достижения" },
  { icon: "/cristal.svg", title: "Магазин" },
  { icon: "/axe.svg", title: "Сражения" },
];

export const SideMenu = () => {
  const [activeTab, setActiveTab] = useState("Персонаж");
  return (
    <>
      <Flex
        width="265px"
        height="800px"
        borderRadius="20px"
        flexDirection="column"
        alignItems="center"
        bgColor="#FFF"
        mt="35px"
        ml="20px"
        boxShadow="md"
        p="md"
      >
        <Flex justifyContent="center" mt="24px" mb="10px">
          <Image src="/logo.svg" width={190} height={50} alt="" />
        </Flex>
        <Image src="/underline.svg" width={233} height={1} alt="" />

        <Flex flexDirection="column" mt="22px">
          {navItems.map((item) => (
            <MenuItem
              key={item.title}
              {...item}
              active={activeTab === item.title}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
};

const MenuItem = ({ icon, title, active, activeTab, setActiveTab }) => {
  console.log({ active });
  return (
    <Flex
      cursor="pointer"
      width="220px"
      height="54px"
      alignItems="center"
      p="17px 0 17px 28px"
      _hover={{
        opacity: 0.7,
      }}
      boxShadow={`${active ? "md" : ""}`}
      borderRadius="8px"
      onClick={() => {
        setActiveTab(title);
        console.log(activeTab);
      }}
    >
      <Image
        src={icon}
        width={20}
        height={20}
        alt=""
        color={`${active ? "#3A83F1" : "#322659"}`}
      />
      <Text
        color={`${active ? "#3A83F1" : "#322659"}`}
        ml="17px"
        fontSize="14px"
        fontWeight="600"
      >
        {title}
      </Text>
    </Flex>
  );
};
