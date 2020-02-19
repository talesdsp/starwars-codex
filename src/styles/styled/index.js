import {Link} from "react-router-dom";
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

export const Button = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  background-color: #323535;
  width: 100%;
  max-width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  opacity: 0.7;

  :hover,
  :focus,
  :focus-within {
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

  ${(props) =>
    props.disabled &
    css`
      pointer-events: none;
      cursor: not-allowed;
    `}
`;

export const List = styled.ul`
  display: flex;
  position: relative;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  min-height: max-content;
  background-color: transparent;
`;
export const Item = styled.li`
  color: #fff;
  text-decoration: none;
  width: 100%;
  position: relative;
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  flex-direction: column;
  flex: 1;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
`;

export const Role = styled.h1`
  font-size: 4rem;
  color: #fff;
  width: 100%;
  text-align: center;
  background-color: #03121a;
  padding: 4rem 0;
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
  animation: ${fadeIn} 1s ease;
`;

export const PopUp = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  padding: 1rem 0;
  width: 100%;
  z-index: 2;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #444 50%, rgba(0, 0, 0, 0) 100%);
  animation: ${fadeIn} 1s ease;
`;

export const Page = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 1.6rem;
  text-decoration: underline;
`;

export const Numbers = styled.span`
  padding: 0.5rem;
  margin: 0 0.5rem;
`;
