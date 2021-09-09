import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Input } from "../styledComponents/Input/Input";
import {
  ChatEnterWrapper,
  ChatHistoryWrapper,
  ChatWrapper,
  EnterButton,
} from "./Chat.styled";

const Chat = (): JSX.Element => {
  const chatActive = useSelector((state: RootState) => state.chat.isActive);
  return (
    <ChatWrapper active={chatActive}>
      <ChatHistoryWrapper />
      <ChatEnterWrapper>
        <Input />
        <EnterButton isLight={true}>➔</EnterButton>
      </ChatEnterWrapper>
    </ChatWrapper>
  );
};

export default Chat;
