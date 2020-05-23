import styled, { css, keyframes } from "styled-components";
import { globalButton, globalItem, globalList, globalWindow } from "../../global-styled/index";

const shake = keyframes`
    0% {
      transform: translate(.1rem, .1rem) rotate(0deg);
    }
    10% {
      transform: translate(-.1rem, -.2rem) rotate(-1deg);
    }
    20% {
      transform: translate(-.3rem, 0rem) rotate(1deg);
    }
    30% {
      transform: translate(.3rem, .2rem) rotate(0deg);
    }
    40% {
      transform: translate(.1rem, -.1rem) rotate(1deg);
    }
    50% {
      transform: translate(-.1rem, .2rem) rotate(-1deg);
    }
    60% {
      transform: translate(-.3rem, .1rem) rotate(0deg);
    }
    70% {
      transform: translate(.3rem, .1rem) rotate(-1deg);
    }
    80% {
      transform: translate(-.1rem, -.1rem) rotate(1deg);
    }
    90% {
      transform: translate(.1rem, .2rem) rotate(0deg);
    }
    100% {
      transform: translate(.1rem, -.2rem) rotate(-1deg);
    }
`;

interface IWindowProps {
  readonly shake: boolean;
}

export const Window = styled(globalWindow)<IWindowProps>`
  ${(props) =>
    props.shake &&
    css`
      animation: ${shake} 1.25s;
    `}
`;

export const List = styled(globalList)``;
export const Item = styled(globalItem)``;
export const Button = styled(globalButton)``;

export const HomeWrapper = styled.div`
  width: 100%;
  background: blue;
  margin: 0 auto 8rem;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const StarLogo = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
