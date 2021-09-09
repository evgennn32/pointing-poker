import React from "react";
import { ChatEnterWrapper, ChatWrapper } from "./Chat.styled";

type Props = {
  chatActive: boolean;
};

const Chat = ({ chatActive }: Props): JSX.Element => {
  return (
    <ChatWrapper active={chatActive}>
      <ChatEnterWrapper />
    </ChatWrapper>
  );
};

export default Chat;
