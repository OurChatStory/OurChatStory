import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Marquee from 'react-fast-marquee'
// import useScrollSnap from 'react-use-scroll-snap';


const Intro = () => {
    // const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

    return (
        <section>
            <Box
                mt="0.5rem"
                bgColor={"#9b1fe8"}
            >
                <Marquee
                    gradient={true}
                    speed={50}
                    gradientColor={[155, 31, 232]}
                    gradientWidth={30}
                    pauseOnHover={true}
                >

                    <Text
                        as="span"
                        fontSize="2xl"
                        fontWeight="bold"
                        color="white"
                        m="0.5rem"
                    >
                        #WhatsAppWrapped
                    </Text>

                    <Text
                        as="span"
                        fontSize="2xl"
                        fontWeight="bold"
                        color="white"
                        m="0.5rem"
                    >
                        #WhatsAppWrapped
                    </Text>

                </Marquee>

            </Box>

            <Box
                m="1rem"
                bgColor="pink.400"
                p="1rem"
                h="80vh"
                borderRadius="10px"
                boxShadow="md"
            >
                CHECK
            </Box>

        </section>
    )
}

export default Intro