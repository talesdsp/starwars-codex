import React from "react";
import styled, { keyframes } from "styled-components";
import "./stars.scss";

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

const fallingSkies = keyframes`
  100% {
    transform: translateY(200vh);
  }
`;

interface IStarProps {
  layer1?: boolean;
  layer1A?: boolean;
  layer2?: boolean;
  layer2A?: boolean;
  layer3?: boolean;
  layer3A?: boolean;
}

const Star = styled.div<IStarProps>`
  position: fixed;
  top: -100vh;
  border-radius: 50%;
  animation-name: ${fallingSkies};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
