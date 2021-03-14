import styled, { keyframes } from "styled-components"
import {
  globalButton,
  globalItem,
  globalList,
  globalWindow,
} from "~/global-styled/"

export const Window = styled(globalWindow)``
export const List = styled(globalList)``
export const Item = styled(globalItem)``
export const Button = styled(globalButton)``

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
`

const fadeIn = keyframes`
from{
  opacity: 0;
  transform: translate3d(0, 3rem, 0);
}
to{
  opacity: 1;
  transform: translate3d(0, 0, 0);
  };
`

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

  &[data-preview="true"] {
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
`
