import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export const Item = ({ power, type, img }) => {
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
          <img
            src={img}
            height={140}
            width={140}
          />
          <Text
              fontSize="18px"
              fontWeight="bold"
              color="#718096"
          >
              {type}
          </Text>
          <Text
              fontSize="14px"
              fontWeight="bold"
              color="#A0AEC0"
              mb="15px"
          >
              +{power} к силе
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