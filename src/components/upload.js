import React, { useState } from "react";
import {
  Box,
  Center,
  Spinner,
  Text,
  Stack,
  Heading,
  Link,
  Button,
  Input,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";

import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

const sample_data = require("../data/sample-response");
const Upload = ({ setShowRes, setData }) => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <Box>
      <Heading
        p="1rem"
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
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
          Want to know
          <Text as={"span"} color={"green.400"}>
            <Typewriter
              words={[
                " who texts first?",
                " who texts the most?",
                " how your chat story look like?",
              ]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={20}
              delaySpeed={1700}
            />
          </Text>
        </Text>

        {/* <Text as={"span"} color={"green.400"}>
          WhatsApp!
        </Text> */}
      </Heading>

      <Stack spacing={1} m={["1rem", "1rem"]}>
        <Heading>
          <Text fontSize={["2x1", "3xl"]}>How?💁</Text>
        </Heading>
        <Text fontSize={["1x1", "2xl"]}>
          {/android/i.test(
            navigator.userAgent || navigator.vendor || window.opera
          ) ? (
            <>
              <strong>Android</strong> users can install the WebApp and share
              chat directly to the app.
              <br />
              <br />
              <strong> To install the WebApp</strong>
              <br />
              <i>
                click on the three dots of chrome browser > click Install app
              </i>
              <br />
              <strong> Then</strong> <br />
              <i>
                Go to the whatsapp chat > Click Three dot on top right > More >
                Export chat > Without media > share it to OurChatStory app
              </i>
              <br />
              <br />
              OR upload .txt below directly
            </>
          ) : (
            <>
              <i>
                Go to the whatsapp chat > Click Three dot on top right > More >
                Export chat > Without media > Email youself via gmail > download
                the file from gmail > Upload here
              </i>
            </>
          )}
        </Text>
        <Center ml="2rem" mr="2rem" mt="1rem" mb="2rem">
          {isUploading ? (
            <>
              <Spinner />
              <Text>
                {" "}
                Brewing your story. Usually takes less than a minute...
              </Text>
            </>
          ) : (
            <SimpleGrid columns={[1, null, 2]} spacing={[1, null, 10]}>
              <Box>
                <label for="hid" className="button-56">
                  Upload to make
                </label>

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
                        "https://wa-chat-analyzer.herokuapp.com/wrap",
                        data,
                        {
                          // receive two parameter endpoint url ,form data
                        }
                      )
                      .then((res) => {
                        setData(res.data);
                        setShowRes(true);
                      });
                  }}
                />
              </Box>
              <button
                onClick={() => {
                  console.log(sample_data);
                  setData(sample_data.sample);
                  setShowRes(true);
                }}
                className="button-56"
                style={{ backgroundColor: "white" }}
              >
                Show me first
              </button>
            </SimpleGrid>
          )}
        </Center>
        <Heading>
          <Text fontSize={["1x1", "2xl"]}>Privacy?</Text>
        </Heading>
        <Text>
          NO ONE can see your chats as they are not stored in the database.{" "}
          <br />
          This project is is <strong>open source</strong>, which means you can
          see how it works
          <a href="https://github.com/anshulagx/OurChatStory-Web"> here</a>
        </Text>
      </Stack>
    </Box>
  );
};

export default Upload;
