import React from "react";
import {
    Flex,
    Icon,
    IconProps,
    Container,
    Center,
    Heading,
    Stack,
    Text,
    Button,
    Image,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    HStack,
    ButtonGroup,
    Divider,
    Box,
} from "@chakra-ui/react";
import { SiLinkedin, SiGithub, SiBit } from "react-icons/si";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";

const Projects = () => {
    return (
        <>
            <Box bgColor="#F2F5F7">
                <Container maxW="3xl" pt={"70px"} pb={"50px"}>
                    <Center mb="40px">
                        <Heading>Projects</Heading>
                    </Center>
                    <SimpleGrid
                        spacing={4}
                        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                        // alignContent={"center"}
                    >
                        <Card maxW="sm">
                            <CardBody>
                                {/* <Image
                                    src="/CollabtimeScreenshot.png"
                                    alt="Screenshot of project"
                                    borderRadius="lg"
                                /> */}
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">
                                        <Center>
                                        Collabtime
                                        </Center>
                                    </Heading>
                                    <Text>
                                        A web app for managing team tasks in a collaborative way.
                                    </Text>
                                    <Text fontSize={"14px"}>
                                        Username: collabtime@collabtime.net
                                    </Text>
                                    <Text fontSize={"14px"}>
                                        Password: C011@bTime#2024
                                    </Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <Stack w={"100%"}>
                                    <Button
                                        leftIcon={<SiGithub />}
                                        colorScheme={"gray"}
                                        size="xs"
                                    >
                                        <a href="https://github.com/gastelumdev/collabtime-vite">
                                            Frontend Repo
                                        </a>
                                    </Button>
                                    <Button
                                        leftIcon={<SiGithub />}
                                        colorScheme={"gray"}
                                        size="xs"
                                    >
                                        <a href="https://github.com/gastelumdev/collabtime-ts-backend">
                                            Backend Repo
                                        </a>
                                    </Button>
                                    <Button
                                        leftIcon={
                                            <BsReverseLayoutSidebarReverse />
                                        }
                                        colorScheme="orange"
                                        size="xs"
                                    >
                                        <a href="https://collabtime.net">
                                            Visit Site
                                        </a>
                                    </Button>
                                    </Stack>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </Container>
            </Box>
            <Box bgColor="white">
                <Container maxW="3xl" pt={"70px"} pb={"50px"}>
                    <Center mb="40px">
                        <Heading>React Components</Heading>
                    </Center>
                    <SimpleGrid
                        spacing={4}
                        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                        // alignContent={"center"}
                    >
                        <Card maxW="sm">
                            <CardBody>
                                <Image
                                    src="/bit-password-input.png"
                                    alt="Green double couch with wooden legs"
                                    borderRadius="lg"
                                    height={"220px"}
                                />
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">Password Input</Heading>
                                    <Text>
                                        A password component with show and hide
                                        password functionality. Built with Antd
                                        password component.
                                    </Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <ButtonGroup spacing="2">
                                    {/* <Button
                                        leftIcon={<SiBit />}
                                        colorScheme={"gray"}
                                        size="xs"
                                    >
                                        <a href="https://github.com/gastelumdev/collabtime-mern">
                                            Bit.dev Preview
                                        </a>
                                    </Button> */}
                                    <Button
                                        leftIcon={<SiBit />}
                                        colorScheme="orange"
                                        size="xs"
                                    >
                                        <a href="https://bit.cloud/gastelumdev/gdev-template/password-input">
                                            Bit.dev Preview
                                        </a>
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                        <Card maxW="sm">
                            <CardBody>
                                <Image
                                    src="/bit-login.png"
                                    alt="Green double couch with wooden legs"
                                    borderRadius="lg"
                                    height={"220px"}
                                />
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">Login</Heading>
                                    <Text>A customizable login component.</Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <ButtonGroup spacing="2">
                                    {/* <Button
                                        leftIcon={<SiBit />}
                                        colorScheme={"gray"}
                                        size="xs"
                                    >
                                        <a href="https://github.com/gastelumdev/collabtime-mern">
                                            Bit.dev Preview
                                        </a>
                                    </Button> */}
                                    <Button
                                        leftIcon={<SiBit />}
                                        colorScheme="orange"
                                        size="xs"
                                    >
                                        <a href="https://bit.cloud/gastelumdev/gdev-template/login">
                                            Bit.dev Preview
                                        </a>
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    );
};

export default Projects;
