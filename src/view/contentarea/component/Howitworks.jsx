import React from "react";
import ContextData from "../../../model/context";
import SubHeading from "./SubHeading";

const HowItWorks = () => (
  <div id="how">
    <SubHeading
      heading={ContextData.HowItWorks.heading}
      context={ContextData.HowItWorks.context}
    />
  </div>
);

export default HowItWorks;
