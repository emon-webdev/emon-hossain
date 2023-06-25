import React from "react";

import DynamicBanner from "./DynamicBanner";
import Portfolio from "./Portfolio";
const Works = () => {
  return (
    <>

      <DynamicBanner title='Projects' />
      {/* projects */}
      <Portfolio />
    </>
  );
};

export default Works;
