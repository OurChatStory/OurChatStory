import React, { useState } from "react";
import {
  Button,
  Box,
  Center,
  Spinner,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";

const Upload = ({ setShowRes, setData }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

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
          Get chat insights from,
        </Text>
        <br />
        <Text as={"span"} color={"green.400"}>
          WhatsApp!
        </Text>
      </Heading>
      <Stack spacing={3} m={["1rem", "2rem"]}>
        <Heading>
          <Text fontSize={["2x1", "3xl"]}>How?</Text>
        </Heading>
        <Text fontSize={["1x1", "2xl"]}>
          1. Export your WhatsApp chat as a txt file
        </Text>
        <Text fontSize={["1x1", "2xl"]}>
          2. Click on the upload button and upload the txt file
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
              const data = new FormData();
              data.append("file", file);
              setIsUploading(true);
              axios
                .post("https://wa-chat-analyzer.herokuapp.com/wrap", data, {
                  // receive two parameter endpoint url ,form data
                })
                .then((res) => {
                  setData(res.data);
                  setIsUploaded(true);
                  setShowRes(true);
                });
            }}
          />
        )}
      </Center>
    </Box>
  );
};

export default Upload;
