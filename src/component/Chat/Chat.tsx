import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  changeChatActive,
  ChatInterface,
  sendChatMessage,
} from "../../app/slices/chatSlice";
import {
  ChatEnterWrapper,
  ChatHistoryWrapper,
  ChatMessageStyled,
  ChatMessageWrapper,
  ChatWrapper,
  CloseButton,
  EnterButton,
  EnterInput,
} from "./Chat.styled";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import User from "../../models/User";
import { UserAvatar } from "../UserAvatar/UserAvatar";

const Chat = (): JSX.Element => {
  const [message, setMessage] = useState("");
  const chat = useSelector<RootState, ChatInterface>(
    (state: { chat: ChatInterface }) => state.chat,
  );
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const user = useSelector<RootState, User>(
    (state: { user: User }) => state.user,
  );
  const dispatch = useDispatch();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messagesEndRef?.current) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [chat.messages]);
  const sendMessage = () => {
    if (!message) return;
    dispatch(
      sendChatMessage({
        message: { message, user },
        roomId: game.roomID,
      }),
    );
    setMessage("");
  };
  const handleKeyDown = (event: React.KeyboardEvent<unknown>) => {
    if (event?.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <ChatWrapper active={chat.isActive}>
      <CloseButton onClick={() => dispatch(changeChatActive())}>X</CloseButton>
      <ChatHistoryWrapper>
        {chat.messages.map((message, index) => (
          <ChatMessageWrapper key={index}>
            <ChatMessageStyled>{message.message}</ChatMessageStyled>
            <UserAvatar {...message.user} />
          </ChatMessageWrapper>
        ))}
        <div ref={messagesEndRef} />
      </ChatHistoryWrapper>
      <ChatEnterWrapper>
        <EnterInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <EnterButton isLight={true} onClick={sendMessage}>
          ➔
        </EnterButton>
      </ChatEnterWrapper>
    </ChatWrapper>
  );
};

export default Chat;
