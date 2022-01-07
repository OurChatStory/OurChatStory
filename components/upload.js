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
} from "@chakra-ui/react";
import axios from "axios";

import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

const sample_data = require("../data/sample-response");
const Upload = ({ setShowRes, setData, setIsDemo }) => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <Box>
      <Heading
        p="1rem"
        lineHeight={1.1}
        fontWeight={700}
        fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
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
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          fontWeight={600}
        >
          How?💁
        </Heading>
        <Text fontSize={["x1", "2xl"]}>
          {/android/i.test(
            // navigator.userAgent || navigator.vendor || window.opera
            ""
          ) ? (
            <>
              <strong>Android</strong> users can install the WebApp and share
              chat directly to the app.
              <br />
              <br />
              <strong>To install the WebApp</strong>
              <br />
              <i>
                Click on the three dots of chrome browser &gt; You will find the
                &quot;Install App&quot; option
              </i>
              <br />
              <br />
              <strong>Then</strong> <br />
              <i>
                Go to the whatsapp chat &gt; Click Three dot on top right &gt;
                More &gt; Export chat &gt; Without media &gt; share it to
                OurChatStory app
              </i>
              <br />
              <br />
              <b>OR </b> upload .txt below directly
            </>
          ) : (
            <>
              <i>
                Go to the whatsapp chat &gt; Click Three dot on top right &gt;
                More &gt; Export chat &gt; Without media &gt; Email youself via
                gmail &gt; download the file from gmail &gt; Upload here <br />
                <b>OR</b> Open this website on an <b>Android</b> device to share
                directly via WhatsApp
              </i>
            </>
          )}
        </Text>
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
                  colorScheme="green"
                  size="lg"
                  onClick={() => {
                    document.getElementById("hid").click();
                  }}
                >
                  {/* <label for="hid" cursor="pointer">
                  </label> */}
                  Make your wrap
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
                <Button
                  variant="link"
                  // size="sm"
                  colorScheme="green"
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
        <Heading>
          <Text fontSize={["2x1", "3xl"]} fontWeight={600}>
            Privacy! 🔐
          </Text>
        </Heading>
        <Text fontSize={["1x1", "2xl"]}>
          NO ONE can see your chats as they are not stored in any database.{" "}
          <br />
          This project is is <strong>open source</strong>, which means you can
          see how it works!
          <br />
          <Button
            size="xl"
            variant="link"
            colorScheme="green"
            onClick={() => {
              window.open("https://github.com/anshulagx/OurChatStory-Web");
            }}
          >
            Frontend Repo
          </Button>{" "}
          |{" "}
          <Button
            size="xl"
            variant="link"
            colorScheme="green"
            onClick={() => {
              window.open(
                "https://github.com/iamyajat/WhatsApp-Chat-Analyzer-API"
              );
            }}
          >
            API Repo
          </Button>
        </Text>
      </Stack>
    </Box>
  );
};

export default Upload;
