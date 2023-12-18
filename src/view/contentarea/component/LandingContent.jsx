import React from "react";
import styled from "styled-components";
import ContextData from "../../../model/context";

const ContentStyle = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HeadingStyle = styled.div`
  font-family: "Bigshot-One", sans-serif;
  font-size: 96px;
  color: whitesmoke;
`;

const RpTextStyle = styled.div`
  font-family: "Italiana", sans-serif;
  color: whitesmoke;
  white-space: pre-wrap;
`;

const LandingContent = () => (
  <ContentStyle>
    <div style={{ width: 879, height: 450, position: "relative" }}>
      <div
        style={{
          width: 329,
          height: 331,
          left: 0,
          top: 11,
          position: "absolute",
          background: "#D9D9D9",
          border: "1px black solid",
        }}
      />
      <HeadingStyle>
        <div
          style={{
            width: 524,
            height: 176,
            left: 405,
            top: 0,
            position: "absolute",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          {ContextData.catchphrase.heading}
        </div>
      </HeadingStyle>

      <RpTextStyle>
        <div
          style={{
            width: 590,
            height: 104,
            left: 436,
            top: 188,
            position: "absolute",
            fontSize: 24,
          }}
        >
          {ContextData.catchphrase.context}
        </div>
      </RpTextStyle>
    </div>
  </ContentStyle>
);

export default LandingContent;
