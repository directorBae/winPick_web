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

const FlexBoxGrid = styled.div`
  width: 1000px;
  height: 300px;
  margin: 100px 40px 20px 40px;
  justify-content: center;
  align-items: center;
  font-family: "Bai-Jamjuree", sans-serif;
  white-space: pre-wrap;
  font-size: 20px;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

let FlexBoxContext = ({ heading, context, contextHeight = 300 }) => (
  <SubHeadingContainer style={{ height: 60 + contextHeight }}>
    <SubHeadingStyle>{heading}</SubHeadingStyle>
    <FlexBoxGrid style={{ height: { contextHeight } }}>{context}</FlexBoxGrid>
  </SubHeadingContainer>
);

export default FlexBoxContext;
