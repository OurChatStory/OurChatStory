import React, { useState } from "react";
import { Button, Box, Center, Spinner } from "@chakra-ui/react";
import { MdUploadFile } from "react-icons/md";
import axios from "axios";

import { XYPlot, LineSeries, RadialChart } from "react-vis";

import { VictoryBar, VictoryPie } from "victory";

// import "../node_modules/react-vis/dist/style.css";
import { useLocation } from "react-router-dom";

import * as htmlToImage from "html-to-image";
const Result = () => {
  const saveAs = (blob, fileName) => {
    var elem = window.document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    elem.style = "display:none;";
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === "function") {
      elem.click();
    } else {
      elem.target = "_blank";
      elem.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
  };
  const onCapture = (id) => {
    htmlToImage.toPng(document.getElementById(id)).then(function (dataUrl) {
      saveAs(dataUrl, "my-node.png");
    });
  };
  const [time, setTime] = useState(0);
  const exportAsPicture = () => {
    var t0 = performance.now();

    var data = document.getElementsByClassName("hi");

    for (var i = 0; i < data.length; ++i) {
      htmlToImage.toPng(data[i]).then((dataUrl) => {
        saveAs(dataUrl, "my-node.png");
      });
    }

    var t1 = performance.now();

    var t = t1 - t0;

    setTime(t.toFixed(3));
  };
  const data = [
    { x: 0, y: 20 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("i");
  const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }];

  const victory_data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  return (
    <Box p="2rem">
      <p>hello</p>
      {/* {onCapture("hi")} */}
      <button onClick={exportAsPicture}>capture</button>
      {name}{" "}
      {/* <XYPlot height={300} width={300}>
        <LineSeries data={data} />
      </XYPlot> */}
      {/* <Box p="2rem" bg="orange" className="hi">
        <RadialChart data={myData} width={300} height={300} />
        jsfdgiusdni;
      </Box>
      <VictoryBar
        data={victory_data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"
      /> */}
      <VictoryPie
        animate={{
          duration: 2000,
        }}
        data={[
          { x: "Cats", y: 35 },
          { x: "Dogs", y: 40 },
          { x: "Birds", y: 55 },
        ]}
      />
    </Box>
  );
};

export default Result;
