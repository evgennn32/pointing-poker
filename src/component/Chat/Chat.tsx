import React, { useState } from "react";
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
      </ChatHistoryWrapper>
      <ChatEnterWrapper>
        <EnterInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <EnterButton
          isLight={true}
          onClick={() =>
            dispatch(
              sendChatMessage({
                message: { message, user },
                roomId: game.roomID,
              }),
            )
          }
        >
          ➔
        </EnterButton>
      </ChatEnterWrapper>
    </ChatWrapper>
  );
};

export default Chat;
