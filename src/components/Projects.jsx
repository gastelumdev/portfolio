import React from 'react'
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
  Divider
} from "@chakra-ui/react";
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { BsReverseLayoutSidebarReverse } from 'react-icons/bs'

const Projects = () => {
  return (
    <Container maxW="3xl" pt={"30px"} pb={"50px"}>
        <Center mb="40px"><Heading>Projects</Heading></Center>
    <SimpleGrid
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                  // alignContent={"center"}
              >
          <Card maxW='sm'>
<CardBody>
  <Image
    src='/CollabtimeScreenshot.png'
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>Event Management</Heading>
    <Text>
    An event management site built for event organizers of the Arcadia Festival of Bands.
    </Text>
  </Stack>
</CardBody>
<CardFooter>
  <ButtonGroup spacing='2'>
  <Button
                          leftIcon={<SiGithub />}
                          colorScheme={"gray"}
                          size="xs"
                      >
                        <a href="https://github.com/gastelumdev/collabtime-mern">Project Repo</a>
                      </Button>
                      <Button
                        leftIcon={<BsReverseLayoutSidebarReverse />}
                          colorScheme="orange"
                          size="xs"
                      >
                          <a href="https://collabtime.onrender.com">Visit Site</a>
                      </Button>
  </ButtonGroup>
</CardFooter>
</Card>
              </SimpleGrid>
  </Container>
  )
}

export default Projects