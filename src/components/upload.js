import React, { useState } from "react";
import { Button, Box, Center, Spinner } from "@chakra-ui/react";
import { MdUploadFile } from "react-icons/md";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { VictoryBar, VictoryPie } from "victory";

import Files from "react-files";
const Upload = () => {
  const history = useHistory();
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [data, setData] = useState({});
  return (
    <Box p="2rem">
      {console.log("abx", data["Anshul"])}
      {isUploaded ? (
        <VictoryPie
          data={[
            { x: "Anshul", y: data["Anshul"] },
            { x: "YM", y: data["Yajat MALHOTRA CSE VIT"] },
          ]}
        />
      ) : (
        ""
      )}

      <Center m="3rem">
        {isUploading ? (
          <Spinner isDisabled="true" />
        ) : (
          <input
            type="file"
            name="file"
            onChange={(event) => {
              const file = event.target.files[0];
              console.log(file);
              const data = new FormData();
              data.append("file", file);
              setIsUploading(true);
              axios
                .post("https://wa-chat-analyzer.herokuapp.com/analyze/", data, {
                  // receive two parameter endpoint url ,form data
                })
                .then((res) => {
                  // then print response status
                  console.log(
                    res.data.no_of_messages_per_member["Yajat MALHOTRA CSE VIT"]
                  );

                  //history.push("/results/?i=324");
                  setIsUploaded(true);
                  setData(res.data.no_of_messages_per_member);
                });
            }}
          />
        )}

        {/* <Files
          className="files-dropzone"
          onChange={(file) => {
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
                history.push("/results/?i=324");
              });
          }}
          onError={(error) => {
            alert(error.message);
          }}
          accepts={[".txt"]}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files> */}
        {/* <Button
          leftIcon={<MdUploadFile />}
          colorScheme="green"
          size="lg"
          variant="solid"
        >
          Upload
        </Button> */}
      </Center>
    </Box>
  );
};

export default Upload;
