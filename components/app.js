import { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Stack,
  Spinner,
  Center,
  Image as CImage,
  Text,
  Link,
  Button,
  HStack,
  Spacer,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import Dashboard from "./dashboard-story";
import Uploader from "./upload";
import axios from "axios";
import { API_URL } from "../constants";
import Intro from "./intro";
import Marquee from "react-fast-marquee";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

// random up down animation
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomUpDownAnimation = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(${random(10, 50)}px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const App = () => {
  const spinAnimation = `${randomUpDownAnimation} infinite 10s linear`;

  const [isUploading, setIsUploading] = useState(false);
  const [showUploader, setShowUploader] = useState(false);

  useEffect(() => {
    // const imagesPreload = [
    //   "static/bg2.png",
    //   "static/bg3.png",
    //   "static/bg4.png",
    //   "static/bg5.png",
    //   "static/bg6.png",
    //   "static/bg7.png",
    //   "static/bg8.png",
    //   "static/bg9.png",
    //   "static/bg11.png",
    //   "static/bg99.png",
    // ];
    // imagesPreload.forEach((image) => {
    //   const newImage = new Image();
    //   newImage.src = image;
    //   window[image] = newImage;
    // });
    if (navigator.serviceWorker)
      navigator.serviceWorker.onmessage = (event) => {
        var imageBlob = event.data.file;
        const data = new FormData();
        data.append("file", imageBlob);
        // setShowLoader(true);
        axios
          .post(API_URL + "wrap", data, {
            // receive two parameter endpoint url ,form data
          })
          .then((res) => {
            setData(res.data);
            setIsDemo(false);
            setShowRes(true);
          })
          .catch((error) => {
            try {
              alert(error.response.data);
            } catch (error) {
              alert("Connection failed. Try again!");
            }
          });
      };
  });

  const [showRes, setShowRes] = useState(false);
  const [data, setData] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [isDemo, setIsDemo] = useState(false);

  return showRes ? (
    <Dashboard drawData={data} isDemo={isDemo} />
  ) : (
    <Box
      w="100%"
      bgColor="#000"
      overflow="hidden"
      h="100vh"
      position="relative"
    >
      {showUploader ? (
        <Uploader
          setIsDemo={setIsDemo}
          setShowRes={setShowRes}
          setData={setData}
          setShowUploader={setShowUploader}
        />
      ) : (
        " "
      )}

      <HStack
        p="1rem 1.5rem 0.6rem 1.5rem"
        align="center"
        bgColor={"#000"}
        w="100%"
        // position="fixed"
        direction={["column", "row"]}
        zIndex="50"
        h="10vh"
      >
        <CImage
          boxSize="45px"
          src="static/logo2.png"
          alt="OurChatStory"
          style={{ imageRendering: "crisp-edges" }}
        />
        <Spacer w={"100%"} />
        <Button
          colorScheme="primary"
          p={{
            base: ["2rem", "1.5rem"],
            sm: ["2rem", "1.5rem"],
            lg: ["2rem", "1.5rem"],
          }}
          borderRadius={50}
          onClick={() => {
            setShowUploader(true);
            // Disable scroll
            document.body.style.overflow = "hidden";
          }}
        >
          {/* <label for="hid" cursor="pointer">
                      </label> */}
          <Text fontSize={{ base: "sm", sm: "sm", lg: "md" }} color="dark">
            Make your wrap
          </Text>
          {/* <input
                        id="hid"
                        type="file"
                        name="file"
                        title=""
                        hidden
                        className="custom-file-input"
                        size="100"
                        onChange={uploadFile}
                    /> */}
        </Button>
      </HStack>
      <Box
      // pt="5rem"
      >
        {/* <Box
                    bgColor={"#9b1fe8"}
                >
                    <Marquee
                        gradient={true}
                        speed={40}
                        gradientColor={[155, 31, 232]}
                        gradientWidth={30}
                        pauseOnHover={true}
                    >
                        {[...Array(8)].map((i) => (
                            <Text
                                key={i}
                                as="span"
                                fontSize={{ base: "2xl", md: "2xl", sm: "2xl", lg: "xl" }}
                                fontWeight="bold"
                                color="white"
                                m="0.5rem"
                            >
                                #WhatsAppWrapped
                            </Text>
                        ))}


                    </Marquee>
                </Box> */}

        <Box>
          <Intro setShowUploader={setShowUploader} />
          {/* <CImage
                    src="static/yellow.svg"
                    position="absolute"
                    top="50vh"
                    left="18vw"
                    width="10rem"
                    height="10rem"
                    objectFit="cover"
                    display={{ base: "none", sm: "none", md: "none", lg: "block" }}
                    opacity={0.6}
                    zIndex={0}
                    animation={spinAnimation}
                /> */}
          <Box>
            <CImage
              src="static/pink.svg"
              position="fixed"
              top="22vh"
              left="8vw"
              width="16rem"
              height="10rem"
              display={{ base: "none", sm: "none", md: "none", lg: "block" }}
              opacity={0.6}
              // zIndex={0}
              animation={spinAnimation}
            />

            <CImage
              src="static/yellow.svg"
              position="absolute"
              top="65vh"
              left="8vw"
              width="16rem"
              height="10rem"
              display={{ base: "none", sm: "none", md: "none", lg: "block" }}
              opacity={0.6}
              zIndex={0}
              animation={spinAnimation}
            />

            {/* <CImage
                    src="static/yellow.svg"
                    position="absolute"
                    top="75vh"
                    right="5vw"
                    width="10rem"
                    height="10rem"
                    objectFit="cover"
                    display={{ base: "none", sm: "none", md: "none", lg: "block" }}
                    opacity={0.6}
                    zIndex={0}
                    animation={spinAnimation}
                /> */}

            {/* 
                <CImage
                    src="static/pink.svg"
                    position="absolute"
                    top="22vh"
                    right="8vw"
                    width="10rem"
                    height="10rem"
                    objectFit="cover"
                    display={{ base: "none", sm: "none", md: "none", lg: "block" }}
                    opacity={0.6}
                    zIndex={0}
                    animation={spinAnimation}
                /> */}

            <CImage
              src="static/green.svg"
              position="absolute"
              top="44vh"
              right="8vw"
              width="16rem"
              height="10rem"
              display={{ base: "none", sm: "none", md: "none", lg: "block" }}
              opacity={0.6}
              zIndex={0}
              animation={spinAnimation}
            />
          </Box>
        </Box>

        <Box>
          {showLoader ? (
            <Box h="80vh">
              <Center mt="2rem">
                <Text>
                  {" "}
                  Brewing your story...
                  <br />
                  Usually takes less than 20 seconds.
                  <br />
                </Text>
                <Spinner size="xl" />
              </Center>
            </Box>
          ) : (
            " "
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default App;
