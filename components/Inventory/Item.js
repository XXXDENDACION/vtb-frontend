import React from "react";
import Image from "next/image";
import { Box, Button, Text } from "@chakra-ui/react";

export const Item = () => {
  return (
      <Box
          backgroundColor="#EDF2F7"
          borderRadius="8px"
          padding="10px 40px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          flexBasis="230px"
          maxWidth="230px"
          maxHeight="390"
      >
          <Image
            src=""
            height={140}
            width={140}
          />
          <Text
              fontSize="18px"
              fontWeight="bold"
              color="#718096"
          >
              Рога Даныча
          </Text>
          <Text
              fontSize="14px"
              fontWeight="bold"
              color="#A0AEC0"
              mb="15px"
          >
              +5 к силе
          </Text>
          <CustomButton
              colorScheme="facebook"
              variant='outline'

          >
              Снять
          </CustomButton>
          <CustomButton
              colorScheme="facebook"
              variant='solid'
          >
              Продать
          </CustomButton>
          <CustomButton
              colorScheme="facebook"
              variant='solid'
          >
              Отправить
          </CustomButton>
      </Box>
  )
};

function CustomButton({ colorScheme, variant, children}) {
    return (
        <Button
            colorScheme={colorScheme}
            variant={variant}
            width="100%"
            borderRadius="8px"
            fontSize="12px"
            height="30px"
            mb="6px"
        >
            {children}
        </Button>
    )
}