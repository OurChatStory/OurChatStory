import React, { useState } from "react";
import { Button, Box, Center, Spinner } from "@chakra-ui/react";
import { MdUploadFile } from "react-icons/md";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { VictoryBar, VictoryPie } from "victory";

import Dashboard from "./dashboard";

import Files from "react-files";
import { APIDataContext } from "../App";
const Upload = () => {
  const history = useHistory();
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [data, setData] = useState({});
  return (
    <Box p="2rem">
      {isUploaded ? <Dashboard drawData={data} /> : ""}

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
                  // then print response status

                  //history.push("/results/?i=324");

                  // <APIDataContext.Consumer>
                  //   {(value) => <h1>{value}</h1>}
                  //   {/* prints: Reed */}
                  // </APIDataContext.Consumer>;
                  console.log("q:", res.data);
                  setData(res.data);
                  setIsUploaded(true);
                });
            }}
          />
        )}
      </Center>
    </Box>
  );
};

export default Upload;
