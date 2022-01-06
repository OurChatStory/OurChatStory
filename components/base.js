import { React, useState, useEffect } from "react";
import {
  Heading,
  Box,
  Stack,
  Spinner,
  Center,
  Image as CImage,
  Text,
  Link,
} from "@chakra-ui/react";
import Dashboard from "./dashboard-story";
import Uploader from "./upload";
import axios from "axios";

// import img2 from "../static/bg2.png"; //
// import img3 from "../static/bg3.png"; //
// import img4 from "../static/bg4.png"; //
// import img5 from "../static/bg5.png"; //
// import img6 from "../static/bg6.png"; //
// import img7 from "../static/bg7.png"; //
// import img8 from "../static/bg8.png"; //
// import img9 from "../static/bg9.png"; //
// import img11 from "../static/bg11.png"; //
// import img99 from "../static/bg99.png";
import ScriptTag from "react-script-tag/lib/ScriptTag";

const Base = () => {
  useEffect(() => {
    // const imagesPreload = [
    //   img2,
    //   img3,
    //   img4,
    //   img5,
    //   img6,
    //   img7,
    //   img8,
    //   img9,
    //   img11,
    //   img99,
    // ];
    // imagesPreload.forEach((image) => {
    //   const newImage = new Image();
    //   newImage.src = image;
    //   window[image] = newImage;
    // });

    {
      navigator.serviceWorker.onmessage = (event) => {
        var imageBlob = event.data.file;
        const data = new FormData();
        data.append("file", imageBlob);
        setShowLoader(true);
        axios
          .post("https://wa-chat-analyzer.herokuapp.com/wrap", data, {
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
    }
  });

  const [showRes, setShowRes] = useState(false);
  const [data, setData] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [isDemo, setIsDemo] = useState(false);

  // axios.get("https://wa-chat-analyzer.herokuapp.com/"); //to wake up heroku dyno
  return showRes ? (
    <Dashboard drawData={data} isDemo={isDemo} />
  ) : (
    <Box
      p="1.5rem"
      w="100%"
      h="100%"
      bgImage="static/bg2.png"
      backgroundPosition="top"
      backgroundRepeat="repeat"
      backgroundSize="100%"
    >
      <Stack
        m="0.75rem 1rem 1rem 1rem"
        align="center"
        direction={["column", "row"]}
        spacing="1.25rem"
      >
        <CImage
          boxSize="70px"
          src="static/logo2.png"
          alt="OurChatStory"
          style={{ imageRendering: "crisp-edges" }}
        />
        <Heading
          mb="2rem"
          colorScheme="blue"
          align="center"
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          WhatsApp Wrapped
        </Heading>
      </Stack>

      <Box m={["0.2rem", "1rem"]} boxShadow="2xl" bg="white" p="5" rounded="md">
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
          <Uploader
            setIsDemo={setIsDemo}
            setShowRes={setShowRes}
            setData={setData}
          />
        )}
      </Box>
      <Box p="1rem">
        <Stack
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
          <Center pt="0.4rem">
            <form>
              <ScriptTag
                src="https://checkout.razorpay.com/v1/payment-button.js"
                data-payment_button_id="pl_Ic6eHfMIx84gMI"
                async
              >
                {" "}
              </ScriptTag>{" "}
            </form>
          </Center>
        </Stack>
        <Text fontSize={["x1", "2xl"]} align="center">
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
        </Text>
      </Box>
    </Box>
  );
};

export default Base;
