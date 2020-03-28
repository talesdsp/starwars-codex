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

export const Window = styled.main<IWindowProps>`
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

export const StarLogo = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const HomeWrapper = styled.div`
  width: 40%;
  background: blue;
  margin: 0 auto 8rem;
`;

export const Role = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  background-color: #03121a;
  padding: 3rem 0;
`;

export const List = styled.ul`
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

export const Item = styled.li`
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
  readonly number?: boolean;
  readonly off?: boolean;
}

export const Button = styled.button<IButtonProps>`
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
    props.number &&
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

const fadeIn = keyframes`
from{
  opacity: 0;
  transform: translate3d(0, 3rem, 0);
}
to{ 
  opacity: 1;
  transform: translate3d(0, 0, 0);
  };
`;

export const X = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  z-index: 10;
  &::after {
    content: "";
    position: absolute;
    background: #fff;
    width: 2rem;
    transform: rotate(45deg);
    height: 0.3rem;
  }
  &::before {
    position: absolute;
    content: "";
    background: #fff;
    width: 2rem;
    transform: rotate(-45deg);
    height: 0.3rem;
  }

  @media (min-width: 768px) {
    display: none;
    &::after,
    &::before {
      display: none;
    }
  }
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  opacity: 0.8;
  background-color: #000;
  padding: 2rem;
  right: 0;
  z-index: 4;
  bottom: 0;
  margin: auto;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease;

  p {
    margin: 1rem 0;
  }

  &[data-openpreview="true"] {
    display: flex;
  }

  @media (min-width: 768px) {
    position: absolute;
    background-color: transparent;
    width: 40%;
    opacity: 1;
    height: unset;
    left: unset;
    bottom: unset;
    right: 0;
    top: 12rem;
  }
`;

export const Controls = styled.footer`
  display: flex;
  position: relative;

  @media (min-width: 768px) {
    margin-left: 10vw;
    max-width: 40%;
  }
`;

export const Page = styled.div`
  display: flex;
  position: absolute;
  top: 5rem;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  text-decoration: underline;
`;
