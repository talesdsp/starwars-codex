import styled from "styled-components";
import {
  globalButton,
  globalItem,
  globalList,
  globalWindow,
} from "../../../../global-styled/index";

export const Window = styled(globalWindow)``;
export const List = styled(globalList)``;
export const Item = styled(globalItem)``;
export const Button = styled(globalButton)``;

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
