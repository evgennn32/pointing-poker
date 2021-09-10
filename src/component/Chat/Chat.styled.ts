import styled from "styled-components";
import { ButtonStyled } from "../Button/Button";

export const ChatWrapper = styled.aside<{ active: boolean }>`
  position: sticky;
  float: right;
  top: 0;
  right: 20px;
  ${(props) => (props.active ? "display: inline-block;" : "display: none;")}
  width: 350px;
  height: 700px;
  max-height: 80vh;
  border: 1px solid black;
  border-radius: 3px;
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
