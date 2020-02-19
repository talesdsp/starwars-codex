import {Link} from "react-router-dom";
import styled from "styled-components";

export const Window = styled.main`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    font-size: 8rem;
    font-weight: 900;
    text-shadow: 0 0 1px #ff0;
    font-family: sans-serif;
  }
`;

export const Button = styled(Link)`
  font-size: 2.4rem;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-color: #323535;
  width: 100%;
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
`;

export const List = styled.ul`
  display: flex;
  position: relative;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 40%;
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
