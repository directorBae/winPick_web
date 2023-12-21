import React from "react";
import styled from "styled-components";

const ContextCardStyle = styled.div`
  width: 250px;
  height: 380px;
  border: 1px solid white;
  padding: 20px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
`;

const HeadingStyle = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const ContextStyle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: -20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const StyledImage = styled.img`
  width: 160px;
  height: 160px;
  margin: auto;
  align-self: center;
  object-fit: contain;
`;

function ContextCard({ heading, image, context }) {
  const img = (
    <StyledImage src={"image/pricing/" + image + ".png"} alt={image + ".png"} />
  );
  return (
    <ContextCardStyle>
      <HeadingStyle>{heading}</HeadingStyle>
      <ImageContainer>{img}</ImageContainer>
      <ContextStyle>{context}</ContextStyle>
    </ContextCardStyle>
  );
}

export default ContextCard;
