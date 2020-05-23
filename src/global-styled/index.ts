import styled, { css, keyframes } from "styled-components";

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
  readonly shake?: boolean;
}

export const globalWindow = styled.main<IWindowProps>`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  ${(props) =>
    props.shake &&
    css`
      animation: ${shake} 1.25s;
    `}
`;

export const globalList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: transparent;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const globalItem = styled.li`
  color: #fff;
  text-decoration: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0.2rem 0;
  flex-direction: column;
  p {
    font-size: 1.6rem;
  }
`;

interface IButtonProps {
  readonly paginate?: boolean;
  readonly off?: boolean;
}

export const globalButton = styled.button<IButtonProps>`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  background-color: #323535;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  opacity: 0.7;
  font-size: 1.6rem;

  ${(props) =>
    props.paginate &&
    css`
      color: #ffe81f;
      background-color: unset;
      background-color: unset;
      padding: 0.5rem;
      margin: 0 0.5rem;
    `}

  @media (min-width: 768px) {
    max-width: 40vw;
  }

  :hover,
  :focus {
    opacity: 1;
    background-image: linear-gradient(
      90deg,
      #660a2d 0%,
      #870a2d 5%,
      #53121a 50%,
      #870a2d 95%,
      #660a2d 100%
    );
  }

  h1 {
    font-size: 1.6rem;
  }

  ${(props) =>
    props.off &&
    css`
      background-color: #111;
    `}
`;
