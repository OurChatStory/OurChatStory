import { Text, VStack } from "@chakra-ui/react";
//import axios
import axios from "axios";
const parser = require("../../script/parser");
const Card6 = ({ drawData }) => {
  // // #TODO: Validate data before setting
  // // Get sharable video
  // console.log("res1" + drawData);
  // if (drawData) {
  //   console.log("res making video req", drawData);
  //   axios
  //     .request({
  //       url: "http://ec2-54-163-4-25.compute-1.amazonaws.com:8081/rec",
  //       method: "POST",
  //       responseType: "blob",
  //       data: drawData,
  //     })
  //     .then((response) => {
  //       // create file link in browser's memory
  //       console.log("Video Ready");

  //       setVideoFile(response.data);
  //       const href = URL.createObjectURL(response.data);

  //       // create "a" HTML element with href to file & click
  //       const link = document.createElement("a");
  //       link.href = href;
  //       link.setAttribute("download", "file.mp4"); //or any other extension
  //       document.body.appendChild(link);
  //       link.click();

  //       // clean up "a" element & remove ObjectURL
  //       document.body.removeChild(link);
  //       URL.revokeObjectURL(href);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       // Handle any errors that occur during the request
  //     });
  // } else {
  //   console.log("No data");
  // }
  return (
    <VStack
      spacing="2rem"
      align="center"
      justify="center"
      backgroundImage="/static/compress/tbg1.webp"
      bgBlendMode={"lighten"}
      bgRepeat="no-repeat"
      bgSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      w="100%"
      h="78vh"
      bgColor="#f4e9e1"
      borderRadius="1rem"
      // pt="1rem"
      // pb="1rem"
      p="1rem"
    >
      <Text color="black" fontSize="4xl" align="center" fontWeight="bold">
        Let&apos;s{" "}
        {parser.get_random_element(
          ["experience", "see", "go through"],
          drawData.members
        )}{" "}
        the chat story of {drawData.group ? "a group of" : "two"}{" "}
        {parser.get_random_element(
          ["amazing", "coolest", ""],
          drawData.members
        )}{" "}
        people
      </Text>

      {/* <Text color="black" fontSize="3xl" align="center">
        ------------------&gt;
      </Text> */}
    </VStack>
  );
};

export default Card6;
