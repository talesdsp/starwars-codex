import styled, {keyframes} from "styled-components";

const rotate360 = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(720deg)
  }
`;

const Spinner = styled.div`
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
`;

export default Spinner;
