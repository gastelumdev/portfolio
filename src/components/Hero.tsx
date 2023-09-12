import React from "react";
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
    Icon,
    IconProps,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    HStack,
    ButtonGroup,
    Divider,
} from "@chakra-ui/react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { EmailIcon } from "@chakra-ui/icons";

export default function CallToActionWithIllustration() {
    return (
        <>
            <Container maxW={"5xl"}>
                <Stack
                    textAlign={"center"}
                    align={"center"}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                >
                    <Image
                        borderRadius="full"
                        boxSize="150px"
                        src="/me2.png"
                        alt="Omar Gastelum"
                    />
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}
                    >
                        Hi I'm{" "}
                        <Text as={"span"} color={"orange.400"}>
                            Omar
                        </Text>
                    </Heading>
                    <Text color={"gray.500"} maxW={"3xl"}>
                        Web and Software Developer. Check out my projects below
                        or feel free to reach out
                    </Text>
                    <Stack spacing={6} direction={"row"}>
                        <Button
                            rounded={"full"}
                            px={6}
                            leftIcon={<SiLinkedin />}
                            colorScheme={"messenger"}
                        >
                            <a href="https://github.com/gastelumdev">
                                Linkedin
                            </a>
                        </Button>
                        <Button
                            rounded={"full"}
                            px={6}
                            colorScheme={"orange"}
                            bg={"orange.400"}
                            _hover={{ bg: "orange.500" }}
                            leftIcon={<BsFillEnvelopeFill />}
                        >
                            <a href="mailto:gastelumdev@gmail.com">
                                gastelumdev@gmail.com
                            </a>
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
