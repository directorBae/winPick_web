import React from "react";
import Demo from "./component/Demo";
import LandingContent from "./component/LandingContent";
import HowItWorks from "./component/Howitworks";
import Pricing from "./component/Pricing";
import AboutUs from "./component/Aboutus";
import ContactUs from "./component/Contactus";

const ContentArea = () => (
  <div className="ContentArea">
    <LandingContent />
    <HowItWorks />
    <Demo />
    <Pricing />
    <AboutUs />
    <ContactUs />
  </div>
);

export default ContentArea;
