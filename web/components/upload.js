import React, { useState } from "react";
import {
  Box,
  Center,
  Spinner,
  Text,
  Heading,
  Button,
  VStack,
  HStack,
  IconButton,
  ListItem,
  OrderedList,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";
import { IoClose, IoCloudUpload, IoLogoAndroid, IoLogoApple } from "react-icons/io5";
import { FaWindows } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../constants";
import { sendEvent } from "../lib/analytics";
import { motion } from "framer-motion";

const sample_data = require("../data/sample-response");

const MotionBox = motion(Box);

const Upload = ({
  setShowRes,
  setData,
  setIsDemo,
  setShowUploader,
  showLoader,
  setShowLoader,
  deferredPrompt,
  isSuccessfulPWAInstall,
  setIsSuccessfulPWAInstall,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();

  // Device detection
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
    (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  const [tabIndex, setTabIndex] = useState(isAndroid ? 0 : isiOS ? 1 : 2);

  const handleFileUpload = (file) => {
    if (
      file.name.endsWith(".txt") ||
      file.name.endsWith(".zip")
    ) {
      const data = new FormData();
      data.append("file", file);
      setIsUploading(true);
      setShowLoader(true);
      
      sendEvent("chat_upload_initiated", {
        category: "Chat Upload",
        action: "submit",
        label: "initiated"
      });

      axios
        .post(API_URL + "wrap", data)
        .then((res) => {
          setData(res.data);
          setIsDemo(false);
          setShowRes(true);
          sendEvent("chat_upload_success", {
            category: "Chat Upload",
            action: "submit",
            label: "success"
          });
        })
        .catch((error) => {
          setIsUploading(false);
          setShowLoader(false);
          sendEvent("chat_upload_error", {
            category: "Chat Upload",
            action: "submit",
            label: "error"
          });
          toast({
            title: "Upload Failed",
            description: "Connection failed. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "Invalid File",
        description: "Please upload a .txt or .zip file exported from WhatsApp.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const fileTypes = ["TXT", "ZIP"];

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100vh"
      bg="rgba(0,0,0,0.85)"
      zIndex="1000"
      backdropFilter="blur(10px)"
      overflowY="auto"
    >
      <Center minH="100vh" p={4}>
        <MotionBox
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          bg="#111b21"
          w={{ base: "100%", md: "600px" }}
          borderRadius="xl"
          boxShadow="2xl"
          border="1px solid #2a3942"
          position="relative"
          overflow="hidden"
        >
          {/* Header */}
          <HStack
            p={4}
            borderBottom="1px solid #2a3942"
            justify="space-between"
            bg="#202c33"
          >
            <Heading size="md" color="#e9edef">
              Upload Chat
            </Heading>
            <IconButton
              icon={<IoClose />}
              variant="ghost"
              color="#8696a0"
              onClick={() => {
                setShowUploader(false);
                document.body.style.overflow = "auto";
              }}
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
            />
          </HStack>

          {/* Content */}
          <Box p={6}>
            {showLoader ? (
              <VStack spacing={6} py={10}>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.700"
                  color="#25d366"
                  size="xl"
                />
                <Text color="#e9edef" fontSize="lg" fontWeight="bold">
                  Analyzing your chat...
                </Text>
                <Text color="#8696a0" textAlign="center">
                  This usually takes a few seconds. <br />
                  We are crunching the numbers locally!
                </Text>
              </VStack>
            ) : (
              <VStack spacing={6} align="stretch">
                <Tabs
                  variant="soft-rounded"
                  colorScheme="green"
                  index={tabIndex}
                  onChange={setTabIndex}
                  isFitted
                >
                  <TabList bg="#202c33" p={1} borderRadius="full">
                    <Tab
                      color="#8696a0"
                      _selected={{ color: "#111b21", bg: "#25d366" }}
                    >
                      <Icon as={IoLogoAndroid} mr={2} /> Android
                    </Tab>
                    <Tab
                      color="#8696a0"
                      _selected={{ color: "#111b21", bg: "#25d366" }}
                    >
                      <Icon as={IoLogoApple} mr={2} /> iOS
                    </Tab>
                  </TabList>

                  <TabPanels mt={4}>
                    <TabPanel p={0}>
                      <InstructionList
                        steps={[
                          "Open a chat in WhatsApp",
                          "Tap the three dots (⋮) > More > Export Chat",
                          "Choose 'Without Media'",
                          "Upload the .txt or .zip file here",
                        ]}
                      />
                    </TabPanel>
                    <TabPanel p={0}>
                      <InstructionList
                        steps={[
                          "Open a chat in WhatsApp",
                          "Tap the contact name at the top",
                          "Scroll down and tap 'Export Chat'",
                          "Choose 'Without Media'",
                          "Save to Files and upload here",
                        ]}
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>

                <Box
                  border="2px dashed #2a3942"
                  borderRadius="xl"
                  p={8}
                  textAlign="center"
                  bg="rgba(32, 44, 51, 0.5)"
                  transition="all 0.2s"
                  _hover={{ borderColor: "#25d366", bg: "rgba(37, 211, 102, 0.05)" }}
                >
                  <FileUploader
                    handleChange={handleFileUpload}
                    name="file"
                    types={fileTypes}
                    classes="drop_zone"
                  >
                    <VStack spacing={4} cursor="pointer">
                      <Icon as={IoCloudUpload} w={12} h={12} color="#25d366" />
                      <VStack spacing={1}>
                        <Text color="#e9edef" fontWeight="bold" fontSize="lg">
                          Drag & Drop or Click to Upload
                        </Text>
                        <Text color="#8696a0" fontSize="sm">
                          Supports .txt and .zip files
                        </Text>
                      </VStack>
                    </VStack>
                  </FileUploader>
                </Box>

                <Button
                  variant="ghost"
                  size="sm"
                  color="#8696a0"
                  onClick={() => {
                    setIsDemo(true);
                    setData(sample_data.sample);
                    setShowRes(true);
                    setShowUploader(false);
                  }}
                >
                  Try with demo data instead
                </Button>
              </VStack>
            )}
          </Box>
        </MotionBox>
      </Center>
    </Box>
  );
};

const InstructionList = ({ steps }) => (
  <OrderedList spacing={3} color="#d1d7db" ml={5}>
    {steps.map((step, index) => (
      <ListItem key={index}>
        <Text fontSize="sm">{step}</Text>
      </ListItem>
    ))}
  </OrderedList>
);

export default Upload;
