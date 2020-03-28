import React from "react";
import styled from "styled-components";
import "../css/bg.css";

const Stars: React.FC = () => (
  <>
    <Star className="layer1" />
    <Star className="layer1 a" />
    <Star className="layer2" />
    <Star className="layer2 a" />
    <Star className="layer3" />
    <Star className="layer3 a" />
  </>
);

export default Stars;

const Star = styled.div`
  position: fixed;
  top: -100vh;
  border-radius: 50%;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
