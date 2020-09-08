import styled, { keyframes } from "styled-components"
import {
  globalButton,
  globalItem,
  globalList,
  globalWindow,
} from "../../global-styled/index"

export const Window = styled(globalWindow)``
export const List = styled(globalList)``
export const Item = styled(globalItem)``
export const Button = styled(globalButton)``
export const Role = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  background-color: #03121a;
  padding: 3rem 0;
`

const rotate360 = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(720deg)
  }
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid #ffe81f;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`
