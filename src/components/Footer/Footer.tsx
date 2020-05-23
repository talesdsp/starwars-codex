import React from "react";
import styled from "styled-components";
import { svg } from "../../assets";

const Footer: React.FC = () => {
  return (
    <TutorialBar>
      <TutorialItems>
        <TutorialItem>
          <TutorialKey>
            <img src={svg.upArrow} alt="up-arrow" />
          </TutorialKey>
          - Up
        </TutorialItem>

        <TutorialItem>
          <TutorialKey>
            <img src={svg.downArrow} alt="down-arrow" />
          </TutorialKey>
          - Down
        </TutorialItem>

        <TutorialItem>
          <TutorialKey>
            <img src={svg.enter} alt="enter-key" />
          </TutorialKey>
          - Confirm
        </TutorialItem>
      </TutorialItems>
    </TutorialBar>
  );
};

export default Footer;

const TutorialBar = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    background: rgba(255, 255, 255, 0.03);
    display: block;
    align-items: center;
    height: 7rem;
  }
`;
const TutorialItems = styled.div`
  @media (min-width: 768px) {
    display: flex;
    max-width: 60rem;
    width: 40%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

const TutorialItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 1.2rem;
`;

interface IKeyProps {
  readonly space?: boolean;
}

export const TutorialKey = styled.div<IKeyProps>`
  border: 1px solid #333;
  border-radius: 12%;
  padding: 0 0.3rem;
  margin: 0 1rem;
  width: ${(props) => (props.space ? "5rem" : "3.6rem")};
  img {
    width: 100%;
  }
`;
