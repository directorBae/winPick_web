import React from "react";
import TermsofService from "./TermsofService";
import PrivacyPolicy from "./PrivacyPolicy";

const ToS = () => TermsofService;
const PP = () => PrivacyPolicy;

const ToSPPContainer = () => {
  return (
    <div className="tailBar">
      <nav>
        <ul>
          <li>
            <a href="https://www.termsfeed.com/live/dca43723-f6ea-4ea9-8100-c37030cdb707">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="https://www.freeprivacypolicy.com/live/7c6f1489-47f3-4023-aa6a-e1591b766b66">
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ToSPPContainer;
