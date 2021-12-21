import React, { useState, useCallback, useRef } from "react";
import { Heading, Box, Button } from "@chakra-ui/react";
import ReactDOM from "react-dom";

import Stories from "react-insta-stories";
import Card8 from "./charts/monthly";
import Card0 from "./charts/Card0";
import Card1 from "./charts/Card1";

import Card3 from "./charts/wordcloud";
import Card4 from "./charts/Card4";
import Card5 from "./charts/emoji";
import Card6 from "./charts/time";
import Card7 from "./charts/cold";
import Card9 from "./charts/Card1.2";

import ThankYou from "./charts/ThankCard";
import Welcome from "./charts/Welcome";

import * as htmlToImage from "html-to-image";

const Dashboard = ({ drawData }) => {
  const ref = useRef();
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    console.log(ref.current);
    htmlToImage
      .toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        console.log("z");
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const stories = [
    {
      content: (props) => <Welcome drawData={drawData} />,
    },
    {
      content: (props) => <Card0 drawData={drawData} />,
    },
    {
      content: (props) => <Card1 drawData={drawData} />,
    },
    {
      content: (props) => <Card9 drawData={drawData} />,
    },
    {
      content: (props) => <Card8 drawData={drawData} />,
    },

    {
      content: (props) => <Card6 drawData={drawData} />,
    },
    {
      content: (props) => <Card7 drawData={drawData} />,
    },
    {
      content: (props) => <Card3 drawData={drawData} />,
    },
    {
      content: (props) => <Card4 drawData={drawData} />,
    },
    {
      content: (props) => <Card5 drawData={drawData} />,
    },
    {
      content: (props) => <ThankYou drawData={drawData} />,
    },
  ];
  return (
    <div ref={ref}>
      <Stories
        stories={stories}
        defaultInterval={1000000}
        width="100vw"
        height="95vh"
        preventDefault={false}
      />
      <Button onClick={onButtonClick} width="100vw" height="5vh">
        Share
      </Button>
    </div>
  );
};

// const exportAsPicture = (drawData) => {
//   var d = document.createElement("div");
//   ReactDOM.render(<Welcome drawData={drawData} />, d);
//   console.log(d);

//   htmlToImage.toPng(d).then((dataUrl) => {
//     console.log("s");
//     saveAs(dataUrl, "my-node.png");
//   });
// };

// const saveAs = (blob, fileName) => {
//   var elem = window.document.createElement("a");
//   elem.href = blob;
//   elem.download = fileName;
//   elem.style = "display:none;";
//   (document.body || document.documentElement).appendChild(elem);
//   if (typeof elem.click === "function") {
//     elem.click();
//   } else {
//     elem.target = "_blank";
//     elem.dispatchEvent(
//       new MouseEvent("click", {
//         view: window,
//         bubbles: true,
//         cancelable: true,
//       })
//     );
//   }
//   URL.revokeObjectURL(elem.href);
//   elem.remove();
//   console.log(blob, fileName);
// };

export default Dashboard;
