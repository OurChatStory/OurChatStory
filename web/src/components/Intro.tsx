"use client";

import React from "react";
import { IntroContent } from "./IntroContent";

interface IntroProps {
  setShowUploader: (show: boolean) => void;
}

const Intro: React.FC<IntroProps> = ({ setShowUploader }) => {
  return <IntroContent setShowUploader={setShowUploader} />;
};

export default Intro;
