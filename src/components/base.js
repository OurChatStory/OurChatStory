import { React, useState } from "react";
import { Heading, Box, Text, Stack, Spinner, Center, Image } from "@chakra-ui/react";
import Dashboard from "./dashboard-story";
import Uploader from "./upload";
import axios from "axios";
import img from "../static/bg2.png";
import logo from "../static/logo2.png";
const Base = () => {
  const [showRes, setShowRes] = useState(false);
  const [data, setData] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  return showRes ? (
    <Dashboard drawData={data} />
  ) : (
    <Box
      p="1.5rem"
      w="100%"
      h="100%"
      bgImage={img}
      backgroundPosition="top"
      backgroundRepeat="repeat"
      backgroundSize="140%"
    >
      {
        (navigator.serviceWorker.onmessage = (event) => {
          var imageBlob = event.data.file;
          const data = new FormData();
          data.append("file", imageBlob);
          setShowLoader(true);
          axios
            .post("https://wa-chat-analyzer.herokuapp.com/wrap", data, {
              // receive two parameter endpoint url ,form data
            })
            .then((res) => {
              console.log("res data", res.data);
              setData(res.data);
              setShowRes(true);
            });
        })
      }
      <Stack
        align="center"
        direction={['column', 'row']}
        paddingBottom="1rem"
        spacing='24px'
      >
        <Image
          boxSize='70px'
          src={logo}
          alt='OurChatStory'
          style={{imageRendering: "crisp-edges"}}
        />
        <Heading mb="2rem" colorScheme="blue" align="center" fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
          #WhatsAppWrapped
        </Heading>
      </Stack>

      <Box m={["0.2rem", "1rem"]} boxShadow="2xl" bg="white" p="5" rounded="md">
        {showLoader ? (
          <Center>
            <Spinner size="xl" />
          </Center>
        ) : (
          <Uploader setShowRes={setShowRes} setData={setData} />
        )}
      </Box>
    </Box>
  );
};

export default Base;
