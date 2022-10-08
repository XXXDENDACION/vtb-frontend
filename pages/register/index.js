import {
    FormControl,
    FormErrorMessage,
    Flex,
    Text,
    Input,
    Button,
    Link, useDisclosure,
} from "@chakra-ui/react";

import "@chakra-ui/react";

import { QuestionOutlineIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { CustomAlertDialog } from "../../components/AlertDialog";
import axios from "axios";
import { useRouter } from "next/router";

const RegisterPage = () => {
    const [firstNameInput, setFirstNameInput] = useState("");
    const [secondNameInput, setSecondNameInput] = useState("");
    const [keys, setKeys] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    const handleRegister = () => {
        axios.post('http://localhost:3014/signup', {firstName: firstNameInput, lastName: secondNameInput}).then(res => {
            if(res?.data) {
                const {publicKey, privateKey} = res?.data?.result;
                setKeys({
                    publicKey,
                    privateKey
                })
                onOpen();
            }
        })
    }

    const handleCloseModal = () => {
        onClose();
        router.push('/login');
    }

    return (
        <Flex alignItems="center" justifyContent="center" height="100vh">
            <Flex
                bgColor="#F7FAFC"
                padding="40px"
                borderRadius="16px"
                width="560px"
                flexDirection="column"
            >
                <Flex flexDirection="column">
                    <Text
                        color="#0A2896"
                        fontSize="48px"
                        lineHeight="120%"
                        fontWeight="700"
                        margin="0"
                    >
                        Вступай в битву
                    </Text>

                    <Flex>
                        <Text
                            color="#0A2896"
                            fontSize="48px"
                            lineHeight="120%"
                            fontWeight="700"
                            margin="0"
                        >
                            ВТБ
                        </Text>
                        <Text
                            color="#F56565"
                            fontSize="48px"
                            lineHeight="120%"
                            fontWeight="700"
                            margin="0"
                        >
                            !
                        </Text>
                    </Flex>
                </Flex>

                <Text
                    color="#718096"
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="150%"
                    m="16px 0 25px 0"
                >
                    Выполняй задания, сражайся и получай награды!
                </Text>
                <Flex flexDirection="column">
                    <FormControl>
                        <Input
                            value={firstNameInput}
                            onChange={(e) => setFirstNameInput(e.target.value)}
                            placeholder="Имя"
                            type="text"
                            border="none"
                            padding="18px"
                            borderRadius="12px"
                            bgColor="#EDF2F7"
                            width="480px"
                            color="#718096"
                            fontSize="16px"
                            lineHeight="150%"
                        />
                        {firstNameInput === "" ? (
                            <FormErrorMessage>Введите имя</FormErrorMessage>
                        ) : null}
                    </FormControl>
                    <FormControl>
                        <Input
                            value={secondNameInput}
                            onChange={(e) => setSecondNameInput(e.target.value)}
                            placeholder="Фамилия"
                            type="text"
                            border="none"
                            padding="18px"
                            borderRadius="12px"
                            bgColor="#EDF2F7"
                            width="480px"
                            mt="16px"
                            color="#718096"
                            fontSize="16px"
                            lineHeight="150%"
                        />
                        {secondNameInput === "" ? (
                            <FormErrorMessage>Введите фамилию</FormErrorMessage>
                        ) : null}
                    </FormControl>
                </Flex>

                <Flex alignItems="center">
                    <QuestionOutlineIcon color="#C53030" mr="10px" />
                    <Text m="25px 0" color="#C53030" fontSize="12px" lineHeight="150%">
                        После нажатия на кнопку регистрации необходимо сохранить Ваш
                        уникальный ключ, который будет использоваться вместо логина
                    </Text>
                </Flex>

                <CustomAlertDialog
                    keys={keys}
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                >
                    <Button
                        border="none"
                        cursor="pointer"
                        bgGradient="linear(to-r, blue.600, purple.400 )"
                        padding="18px"
                        borderRadius="12px"
                        color="#FFF"
                        fontSize="16px"
                        fontWeight="700"
                        lineHeight="130%"
                        _hover="none"
                        type="submit"
                        onClick={handleRegister}
                    >
                        Регистрация
                    </Button>
                </CustomAlertDialog>

                <Link href="/login">
                    <Flex width="100%" justifyContent="center">
                        <Text color="#4299E1" mt="15px">
                            У меня уже есть аккаунт
                        </Text>
                    </Flex>
                </Link>
            </Flex>
        </Flex>
    );
};

export default RegisterPage;
