import styled, {css, keyframes} from "styled-components";

export const Window = styled.main`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StarLogo = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Role = styled.h1`
  font-size: 3rem;
  color: #fff;
  width: 100%;
  text-align: center;
  background-color: #03121a;
  padding: 3rem 0;
`;

export const List = styled.ul`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: max-content;
  width: 100%;
  background-color: transparent;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Item = styled.li`
  color: #fff;
  text-decoration: none;
  width: 100%;
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 1.6rem;
  }
`;

export const Button = styled.button`
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

export const Card = styled.div`
  display: flex;
  animation: ${fadeIn} 1s ease;
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  background-color: #000;
  right: 0;
  z-index: 4;
  bottom: 0;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${fadeIn} 1s ease;

  p {
    margin: 1rem 0;
  }

  &[data-openpreview="true"] {
    display: flex;
  }

  @media (min-width: 768px) {
    position: absolute;
    width: 16rem;
    height: unset;
    left: unset;
    bottom: unset;
    right: 10%;
    top: 12rem;
  }
`;

export const Controls = styled.footer`
  display: flex;
  margin: auto;
  position: relative;

  @media (min-width: 768px) {
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
