import React, { useState } from "react";
import { Button, Box, Center, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Dashboard from "./dashboard-swipe";
const Upload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [data, setData] = useState({});
  return (
    <Box p="2rem">
      {isUploaded ? (
        <Dashboard drawData={data} />
      ) : (
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
                  });
              }}
            />
          )}
        </Center>
      )}
    </Box>
  );
};

export default Upload;
