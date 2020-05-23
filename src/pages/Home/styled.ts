import styled from "styled-components";
import { globalButton, globalItem, globalList, globalWindow } from "../../global-styled/index";

export const Window = styled(globalWindow)``;

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
