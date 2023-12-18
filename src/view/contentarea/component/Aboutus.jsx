import React from "react";
import ContextData from "../../../model/context";
import SubHeading from "./SubHeading";

const AboutUs = () => (
  <div id="aboutus">
    <SubHeading
      heading={ContextData.AboutUs.heading}
      context={ContextData.AboutUs.context}
    />
  </div>
);

export default AboutUs;
