import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { changeChatActive } from "../../app/slices/chatSlice";
import {
  ChatEnterWrapper,
  ChatHistoryWrapper,
  ChatWrapper,
  CloseButton,
  EnterButton,
  EnterInput,
} from "./Chat.styled";

const Chat = (): JSX.Element => {
  const chatActive = useSelector((state: RootState) => state.chat.isActive);
  const dispatch = useDispatch();
  return (
    <ChatWrapper active={chatActive}>
      <CloseButton onClick={() => dispatch(changeChatActive())}>X</CloseButton>
      <ChatHistoryWrapper />
      <ChatEnterWrapper>
        <EnterInput />
        <EnterButton isLight={true}>➔</EnterButton>
      </ChatEnterWrapper>
    </ChatWrapper>
  );
};

export default Chat;
