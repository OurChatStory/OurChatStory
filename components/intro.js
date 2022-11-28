import { Box, Center, HStack, keyframes, Spacer, Text, VStack } from '@chakra-ui/react'
import { useRef } from 'react';
import Marquee from 'react-fast-marquee'
import { HiArrowCircleUp, HiArrowUp } from 'react-icons/hi';
import useScrollSnap from 'react-use-scroll-snap';

const moveUp = keyframes`
    from {transform: translateY(0px);}
    to {transform: translateY(-10px);}
`;

const Intro = () => {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 1, delay: 1 });
    const moveUpAnimation = `${moveUp} infinite 1s ease-in-out alternate`;


    return (
        <>
            <Box
                mt="0.5rem"
            >
                <VStack
                    ml={{ base: "1.5rem", sm: "1.5rem", lg: "2rem" }}
                    mr={{ base: "1.5rem", sm: "1.5rem", lg: "2rem" }}
                    mt={{ base: "0.5rem", sm: "0.5rem", lg: "0.5rem" }}
                    mb={{ base: "1rem", sm: "1rem", lg: "1rem" }}
                    align={"center"}
                    spacing={{ base: "1rem", sm: "1rem", lg: "1rem" }}
                    h="75vh"
                >
                    <Spacer />

                    <VStack
                        spacing="-1.5rem"
                        align={"start"}
                    >

                        <Text
                            fontSize="6xl"
                            color="primary.200"
                            w={"100%"}
                            fontWeight="600"
                        >
                            Welcome
                        </Text>
                        <Text
                            fontSize="5xl"
                            color="primary.200"
                            w={"100%"}
                            fontWeight="600"
                            align={"end"}
                            pr="2rem"
                        >
                            to the
                        </Text>
                        <Text
                            fontSize="5xl"
                            color="#48937e"
                            w={"100%"}
                            fontWeight="600"
                            pl={"1rem"}
                        >
                            end of a
                        </Text>
                        <Text
                            fontSize="5xl"
                            color="#48937e"
                            pr={"0rem"}
                            w={"100%"}
                            fontWeight="600"
                            align={"end"}
                        >
                            great year.
                        </Text>

                        <Text
                            fontSize="6xl"
                            color="white"
                            pt={"1rem"}
                            w={"100%"}
                            fontWeight="600"
                            align={"start"}
                        >
                            Ready for
                        </Text>
                        <HStack
                            align={"start"}
                            spacing="1.5rem"
                            w={"100%"}
                            pl={"0.5rem"}
                        >
                            <Text
                                fontSize="5xl"
                                color="white"
                                pt={"0.5rem"}
                                w={"100%"}
                                fontWeight="600"
                                align={"end"}
                            >
                                your
                            </Text>
                            <Text
                                fontSize="6xl"
                                color="#dc3ca1"
                                w={"100%"}
                                fontWeight="600"
                                align={"start"}
                            >
                                2022
                            </Text>
                        </HStack>

                        <Text
                            fontSize="6xl"
                            color="#dc3ca1"
                            w={"100%"}
                            fontWeight="600"
                            align={"start"}
                        >
                            Wrapped?
                        </Text>

                    </VStack>

                    <VStack
                        spacing="0.25rem"
                        w={"100%"}
                        pt="2.5rem"
                        align={"center"}
                        animation={moveUpAnimation}
                    >
                        <Box
                            align={"center"}
                            borderRadius={"full"}
                        >
                            <HiArrowUp
                                size="1rem"
                                color="yellow"
                                align={"center"}

                            />

                            <Text
                                fontSize="md"
                                color="yellow.200"
                                w={"100%"}
                                fontWeight="400"
                                align={"center"}
                            >
                                scroll to see more
                            </Text>
                        </Box>
                    </VStack>
                    <Spacer />

                </VStack>
            </Box>
            <section ref={scrollRef}>

                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        bgColor="#00002b"
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    ></Box>

                </Box>

                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        bgColor="#1a0010"
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    ></Box>

                </Box>

                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        bgColor="#120000"
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    ></Box>

                </Box>

                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        bgColor="#00002b"
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    ></Box>

                </Box>
                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    >

                        <Center
                            h="100%"
                            w="100%"
                        >

                            <Text
                                fontSize="7xl"
                                color="white"
                                w={"100%"}
                                fontWeight="600"
                                align={"center"}
                            >
                                Thank You
                            </Text>
                        </Center>

                    </Box>
                </Box>



            </section>
        </>
    )
}

export default Intro