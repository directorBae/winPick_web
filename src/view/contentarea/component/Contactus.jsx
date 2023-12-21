import React from "react";
import ContextData from "../../../model/context";
import SubHeading from "./SubHeading";

const ContactUs = () => (
  <div id="contact">
    <SubHeading
      heading={ContextData.ContactUs.heading}
      context={ContextData.ContactUs.context.join("\n")}
      contextHeight={300}
    />
  </div>
);

export default ContactUs;
