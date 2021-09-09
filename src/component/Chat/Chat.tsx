import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ChatEnterWrapper, ChatWrapper } from "./Chat.styled";

const Chat = (): JSX.Element => {
  const chatActive = useSelector((state: RootState) => state.chat.isActive);
  return (
    <ChatWrapper active={chatActive}>
      <ChatEnterWrapper />
    </ChatWrapper>
  );
};

export default Chat;
