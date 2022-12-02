import React, { useState } from "react";
import {
  Box,
  Center,
  Spinner,
  Text,
  Stack,
  Heading,
  Button,
  VStack,
  HStack,
  IconButton,
  List,
  ListItem,
  OrderedList,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";

import axios from "axios";
import { API_URL } from "../constants";
import { IoClose, IoCloudyNight } from "react-icons/io5";

const sample_data = require("../data/sample-response");

const Upload = ({ setShowRes, setData, setIsDemo, setShowUploader }) => {
  const [isUploading, setIsUploading] = useState(false);
  let isAndroid = /android/i.test(
    navigator.userAgent || navigator.vendor || window.opera
  );
  const isiOS =
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  const [tabIndex, setTabIndex] = useState(isAndroid ? 0 : isiOS ? 1 : 2); // initial -> 0: Android, 1: iOS, 2: PC
  const handleFileUpload = (file) => {
    console.log("zz", file);
    const data = new FormData();
    data.append("file", file);
    console.log("dd", data);
    setIsUploading(true);
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
        setIsUploading(false);
        try {
          alert(error.response.data);
        } catch (error) {
          alert("Connection failed. Try again!");
        }
      });
  };
  return (
    <>
      <Box
        w="100vw"
        h="100vh"
        position="fixed"
        zIndex={100}
        bgColor="#00000080"
        onClick={() => {
          setShowUploader(false);
          // Enable Scroll
          document.body.style.overflow = "auto";
        }}
      />

      <VStack
        w="100vw"
        h="100vh"
        position="fixed"
        zIndex={101}
        onClick={() => {
          setShowUploader(false);
          // Enable Scroll
          document.body.style.overflow = "auto";
        }}
      >
        <Box
          bgColor="dark.500"
          m={{ base: "0.5rem", sm: "0.5rem", lg: "1rem" }}
          borderRadius="1rem"
          w={{ base: "90vw", sm: "90vw", lg: "50vw" }}
          top="20"
          pt="2rem"
          pr="1rem"
          pb="0rem"
          pl="1rem"
          position="fixed"
          onClick={(e) => e.stopPropagation()}
          zIndex={101}
        >
          <IconButton
            aria-label="Close"
            icon={<IoClose size="1.5em" opacity={0.8} color="#555555" />}
            variant="none"
            colorScheme="transparent"
            onClick={() => {
              setShowUploader(false);
              // Enable Scroll
              document.body.style.overflow = "auto";
            }}
            position="absolute"
            top="1.5vh"
            right="1vw"
            zIndex={102}
          />
          <Heading
            p="1rem"
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
          >
            <Text fontSize={{ base: "2xl", sm: "1xl", lg: "4xl" }}>
              Get your
              <Text as={"span"} color={"primary.400"}>
                {" "}
                #WhatsAppWrapped
              </Text>
              !
            </Text>

            {/* <Text as={"span"} color={"green.400"}>
          WhatsApp!
        </Text> */}
          </Heading>

          <Stack spacing={1} m={["1rem", "1rem"]}>
            <Heading
              fontSize={{ base: "1xl", sm: "xl", lg: "2xl" }}
              fontWeight={600}
            >
              How?
            </Heading>
            <Tabs
              index={tabIndex}
              onChange={(index) => setTabIndex(index)}
              pt="1rem"
              variant="soft-rounded"
              colorScheme="primary"
            >
              <TabList>
                <Tab>Android</Tab>
                <Tab>iPhone</Tab>
                <Tab>Desktop</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text fontSize={["x1", "2xl"]}>
                    <OrderedList
                      spacing={3}
                      pt="1rem"
                      fontSize={["md", "md"]}
                      fontWeight={500}
                    >
                      <ListItem>
                        <strong>Android</strong> users can install the WebApp
                        and share chat directly to the app.
                      </ListItem>
                      <ListItem>
                        <strong>To install the WebApp</strong>: Click on the
                        three dots of Chrome browser.
                      </ListItem>
                      <ListItem>
                        You will find the &quot;Install App&quot; option.
                      </ListItem>
                      <ListItem>
                        Then open the chat or group whose wrap you want to
                        generate.
                      </ListItem>
                      <ListItem>
                        Click on the three dots on the top right corner.
                      </ListItem>
                      <ListItem>
                        Click on &quot;More&quot; &gt; &quot;Export chat&quot;
                        &gt; &quot;Without media&quot;.
                      </ListItem>
                      <ListItem>Share it to OurChatStory app.</ListItem>
                    </OrderedList>
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text fontSize={["x1", "2xl"]}>Kaafi ameer ho bhai aap </Text>
                </TabPanel>
                <TabPanel>
                  <Text fontSize={["x1", "2xl"]}>
                    <OrderedList
                      spacing={3}
                      pt="1rem"
                      fontSize={["md", "md"]}
                      fontWeight={500}
                    >
                      <ListItem>
                        Open the chat or group whose wrap you want to generate.
                      </ListItem>
                      <ListItem>
                        Click on the three dots on the top right corner.
                      </ListItem>
                      <ListItem>
                        Click on &quot;More&quot; &gt; &quot;Export chat&quot;
                        &gt; &quot;Without media&quot;.
                      </ListItem>
                      <ListItem>
                        Click on &quot;Email yourself&quot; &gt;
                        &quot;Send&quot;.
                      </ListItem>
                      <ListItem>
                        Download the file from your email and upload it here.
                      </ListItem>
                    </OrderedList>
                  </Text>
                  <Box mt="1rem">
                    <FileUploader
                      multiple={false}
                      handleChange={handleFileUpload}
                      name="file"
                      types={["txt"]}
                      label="Drag and drop your chat txt file here or use the upload button"
                      disabled={isUploading}
                    />
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
            
            {/* <Text fontSize={["x1", "2xl"]}>
              {/android/i.test(
                // navigator.userAgent || navigator.vendor || window.opera
                ""
              ) ? (
                <OrderedList
                  spacing={3}
                  pt="1rem"
                  fontSize={["md", "md"]}
                  fontWeight={500}
                >
                  <ListItem>
                    <strong>Android</strong> users can install the WebApp and
                    share chat directly to the app.
                  </ListItem>
                  <ListItem>
                    <strong>To install the WebApp</strong>: Click on the three
                    dots of Chrome browser.
                  </ListItem>
                  <ListItem>
                    You will find the &quot;Install App&quot; option.
                  </ListItem>
                  <ListItem>
                    Then open the chat or group whose wrap you want to generate.
                  </ListItem>
                  <ListItem>
                    Click on the three dots on the top right corner.
                  </ListItem>
                  <ListItem>
                    Click on &quot;More&quot; &gt; &quot;Export chat&quot; &gt;
                    &quot;Without media&quot;.
                  </ListItem>
                  <ListItem>Share it to OurChatStory app.</ListItem>
                </OrderedList>
              ) : (
                <OrderedList
                  spacing={3}
                  pt="1rem"
                  fontSize={["md", "md"]}
                  fontWeight={500}
                >
                  <ListItem>
                    Open the chat or group whose wrap you want to generate.
                  </ListItem>
                  <ListItem>
                    Click on the three dots on the top right corner.
                  </ListItem>
                  <ListItem>
                    Click on &quot;More&quot; &gt; &quot;Export chat&quot; &gt;
                    &quot;Without media&quot;.
                  </ListItem>
                  <ListItem>
                    Click on &quot;Email yourself&quot; &gt; &quot;Send&quot;.
                  </ListItem>
                  <ListItem>
                    Download the file from your email and upload it here.
                  </ListItem>
                </OrderedList>
              )}
            </Text> */}
            <Center ml="2rem" mr="2rem" mt="1rem" mb="2rem">
              <VStack mt="2rem" mb="2rem" spacing="0.5rem" align="center">
                {isUploading ? (
                  <>
                    <Spinner />
                    <Text textAlign="center">
                      Brewing your story...
                      <br />
                      Usually takes less than 20 seconds.
                    </Text>
                  </>
                ) : (
                  <>
                    <Button
                      // variant="outline"
                      colorScheme="primary"
                      size="lg"
                      onClick={() => {
                        document.getElementById("hid").click();
                      }}
                    >
                      {/* <label for="hid" cursor="pointer">
                  </label> */}
                      Upload
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
                          handleFileUpload(file);
                        }}
                      />
                    </Button>
                    <Button
                      variant="link"
                      // size="sm"
                      colorScheme="primary"
                      onClick={() => {
                        console.log(sample_data);
                        setData(sample_data.sample);
                        setIsDemo(true);
                        setShowRes(true);
                      }}
                    >
                      See a demo
                    </Button>
                  </>
                )}
              </VStack>
            </Center>
          </Stack>
        </Box>
      </VStack>
    </>
  );
};

export default Upload;
