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
} from "@chakra-ui/react";
import Dashboard from "./dashboard-story";
import Uploader from "./upload";
import axios from "axios";
import { API_URL } from "../constants";
import Intro from "./intro";
const App = () => {
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        const imagesPreload = [
            "static/bg2.png",
            "static/bg3.png",
            "static/bg4.png",
            "static/bg5.png",
            "static/bg6.png",
            "static/bg7.png",
            "static/bg8.png",
            "static/bg9.png",
            "static/bg11.png",
            "static/bg99.png",
        ];
        imagesPreload.forEach((image) => {
            const newImage = new Image();
            newImage.src = image;
            window[image] = newImage;
        });

        navigator.serviceWorker.onmessage = (event) => {

            var imageBlob = event.data.file;
            const data = new FormData();
            data.append("file", imageBlob);
            setShowLoader(true);
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
        // bgImage="static/bg2.png"
        // backgroundPosition="top"
        // backgroundRepeat="repeat"
        // backgroundSize="100%"
        >
            <HStack
                p="1rem 1.5rem 0.5rem 1.5rem"
                align="center"
                bgColor={"#000"}
                w="100%"
                direction={["column", "row"]}
            // position="fixed"
            // spacing="1.25rem"
            >
                <CImage
                    boxSize="45px"
                    src="static/logo2.png"
                    alt="OurChatStory"
                    style={{ imageRendering: "crisp-edges" }}
                />
                {/* <Heading
              mb="2rem"
              colorScheme="blue"
              align="center"
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              WhatsApp Wrapped
            </Heading> */}
                <Spacer
                    w={"100%"}
                />
                <Button
                    // variant="outline"
                    colorScheme="primary"
                    p={{ base: ["2rem", "1.5rem"], sm: ["2rem", "1.5rem"], lg: ["2rem", "1.5rem"] }}
                    borderRadius={50}
                    onClick={() => {
                        document.getElementById("hid").click();
                    }}
                >
                    {/* <label for="hid" cursor="pointer">
                      </label> */}
                    <Text
                        fontSize={{ base: "sm", sm: "sm", lg: "md" }}
                        color="dark"
                    >
                        Make your wrap
                    </Text>
                    <input
                        id="hid"
                        type="file"
                        name="file"
                        title=""
                        hidden
                        className="custom-file-input"
                        size="100"
                        onChange={(event) => {
                            const file = event.target.files[0];
                            console.log("zz", file);
                            const data = new FormData();
                            data.append("file", file);
                            console.log("dd", data);
                            setIsUploading(true);
                            axios
                                .post(
                                    API_URL + "wrap",
                                    data,
                                    {
                                        // receive two parameter endpoint url ,form data
                                    }
                                )
                                .then((res) => {
                                    setData(res.data);
                                    setIsDemo(false);
                                    setShowRes(true);
                                })
                                .catch((error) => {
                                    setIsUploading(false);
                                    try {
                                        alert(error.response.data);
                                    } catch (error) {
                                        alert("Connection failed. Try again!");
                                    }
                                });
                        }}
                    />
                </Button>
            </HStack>

            <Box>
                <Intro />
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
                    // <Uploader
                    //   setIsDemo={setIsDemo}
                    //   setShowRes={setShowRes}
                    //   setData={setData}
                    // />
                    " "
                )}
            </Box>
            <Box p="1rem">
                {/* <Stack
              pb="1rem"
              justify="center"
              align="center"
              direction={["column", "row"]}
            >
              <a
                href="https://www.producthunt.com/posts/whatsapp-wrapped-by-ourchatstory-co?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-whatsapp-wrapped-by-ourchatstory-co"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=324689&theme=light"
                  alt="WhatsApp Wrapped by OurChatStory.co - Discover crazy insights from your WhatsApp chats | Product Hunt"
                  width="188.81"
                  height="38"
                />
              </a>
            </Stack> */}
                {/* <Text fontSize={["x1", "2xl"]} align="center">
              Made with ❤️ by
            </Text>
            <Text fontSize={["x1", "2xl"]} align="center">
              <Link
                textDecoration="underline"
                href="https://twitter.com/anshulagx"
                target="_blank"
              >
                @anshulagx
              </Link>{" "}
              &{" "}
              <Link
                textDecoration="underline"
                href="https://twitter.com/iamyajat"
                target="_blank"
              >
                @iamyajat
              </Link>
            </Text> */}
            </Box>
        </Box>
    );
};
export default App