import styled from "styled-components";
import { ButtonStyled } from "../Button/Button";
import { Input } from "../styledComponents/Input/Input";

export const ChatWrapper = styled.aside<{ active: boolean }>`
  position: sticky;
  float: right;
  top: 0;
  right: 20px;
  ${(props) => (props.active ? "display: inline-block;" : "display: none;")}
  width: 350px;
  height: 700px;
  max-height: 80vh;
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  @media (max-width: 950px) {
    position: fixed;
    z-index: 10;
    right: 0;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  z-index: 30;
  top: 20px;
  right: 20px;
  font-size: 36px;
  cursor: pointer;
`;

export const ChatHistoryWrapper = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  overflow-y: scroll;
`;
export const ChatEnterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  border-top: 1px solid black;
  border-radius: 3px;
`;
export const EnterButton = styled(ButtonStyled)`
  width: 66px;
  height: 48px;
`;
export const EnterInput = styled(Input)`
  @media (max-width: 850px) {
    width: 270px;
    height: 41px;
    font-size: 24px;
  }
  @media (max-height: 800px) {
    width: 270px;
    height: 41px;
    font-size: 24px;
  }
`;
