import React from "react";
import styled from "styled-components";

const SubHeadingContainer = styled.div`
  width: 1000px;
  margin-bottom: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubHeadingStyle = styled.div`
  font-family: "Metal-Mania", sans-serif;
  font-size: 48px;
  color: whitesmoke;
  text-align: center;
`;

const SubContextContainer = styled.div`
  width: 800px;
  height: 300px;
  margin: 20px 40px 20px 40px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  white-space: pre-wrap;
  font-size: 20px;
  color: whitesmoke;
`;

let SubHeading = ({ heading, context, contextHeight = 300 }) => (
  <SubHeadingContainer style={{ height: 60 + contextHeight }}>
    <SubHeadingStyle>{heading}</SubHeadingStyle>
    <SubContextContainer style={{ height: { contextHeight } }}>
      {context}
    </SubContextContainer>
  </SubHeadingContainer>
);

export default SubHeading;
