import React from "react";
import styled from "styled-components";

const ContextCardStyle = styled.div`
  width: 250px;
  height: 350px;
  border: 1px solid white;
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
`;

let ContextCard = ({ heading, context }) => (
  <ContextCardStyle>
    <div>{heading}</div>
    <div>{context}</div>
  </ContextCardStyle>
);

export default ContextCard;
