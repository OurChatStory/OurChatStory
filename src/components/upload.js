import React, { useState } from "react";
import {
  Button,
  Box,
  Center,
  Spinner,
  Text,
  Stack,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";

const Upload = ({ setShowRes, setData }) => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <Box>
      <Heading
        p="1rem"
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
      >
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "green.400",
            zIndex: -1,
          }}
        >
          Get to know about your friendship from{" "}
        </Text>

        <Text as={"span"} color={"green.400"}>
          WhatsApp!
        </Text>
      </Heading>

      <Stack spacing={3} m={["1rem", "2rem"]}>
        <Heading>
          <Text fontSize={["2x1", "3xl"]}>How?💁</Text>
        </Heading>
        <Text fontSize={["1x1", "2xl"]}>
          <strong>Android:</strong> Install the app from the prompt below. Then
          go to your WhatsApp chat and export the chat(without media) to
          OurStory app. <br />
          <br />
          <strong>iOS:</strong> Download the chat after exporting it via
          WhatsApp and upload using the button below.
          <br />
          <br />
          <strong> To export your WhatsApp chat as a .txt file</strong>
          <br />{" "}
          <i>
            Open chat> Three dot on top right> More> Export chat> Without media>
            download directly if iOS or Email yourself and download via email
          </i>
        </Text>
        <Text fontSize={["1x1", "2xl"]}>
          Then click on the upload button and upload the .txt file
        </Text>
      </Stack>
      <Center m="3rem">
        {isUploading ? (
          <Spinner />
        ) : (
          <input
            type="file"
            name="file"
            onChange={(event) => {
              const file = event.target.files[0];
              console.log("zz", file);
              const data = new FormData();
              data.append("file", file);
              console.log("dd", data);
              setIsUploading(true);
              axios
                .post("https://wa-chat-analyzer.herokuapp.com/wrap", data, {
                  // receive two parameter endpoint url ,form data
                })
                .then((res) => {
                  setData(res.data);
                  setShowRes(true);
                });
            }}
          />
        )}
      </Center>
      <Stack spacing={3} m={["1rem", "2rem"]}>
        <Heading>
          <Text fontSize={["2x1", "3xl"]}>Privacy?🥷</Text>
        </Heading>
        <ul>
          <li>
            The chats that you upload here are 100% secure and NO ONE can see it
          </li>
          <li>We dont store your chat</li>
          <li>We dont store any meta data of chat</li>
          <li>Infact we dont have any database linked to this website</li>
          <li>Our code is open source for your to see</li>
        </ul>
      </Stack>
    </Box>
  );
};

export default Upload;
