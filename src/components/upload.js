import React from "react";
import { Button, Box, Center, Spinner } from "@chakra-ui/react";
import { MdUploadFile } from "react-icons/md";
import axios from "axios";

const Upload = () => {
  return (
    <Box p="2rem">
      <Center m="3rem">
        <Spinner />
        <input
          type="file"
          name="file"
          onChange={(event) => {
            const file = event.target.files[0];
            console.log(file);
            const data = new FormData();
            data.append("file", file);
            axios
              .post("https://wa-chat-analyzer.herokuapp.com/analyze/", data, {
                // receive two parameter endpoint url ,form data
              })
              .then((res) => {
                // then print response status
                console.log(res.data);
              });
          }}
        />
        <Button
          leftIcon={<MdUploadFile />}
          colorScheme="green"
          size="lg"
          variant="solid"
        >
          Upload
        </Button>
      </Center>
    </Box>
  );
};

export default Upload;
