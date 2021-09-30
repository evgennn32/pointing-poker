import React from "react";
import { AppDispatch, RootState } from "../../app/store";
import { Button } from "../Button/Button";
import { H2, Span, Wrapper, P, ButtonsWrapper } from "./PopUps.styled";
import { ClosePopUp } from "./ClosePopUp";
import { userDelete } from "../../app/slices/gameSlice";
import User from "../../models/User";
import { useDispatch, useSelector } from "react-redux";
import { GameRoomEntity } from "../../models/GameRoomEntity";

type UserToKickOut = ClosePopUp & {
  user: User;
  dispatch: AppDispatch;
};

export const PopUpKIckPlayer = (props: UserToKickOut): JSX.Element => {
  const dispatch = useDispatch();
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const user = useSelector<RootState, User>(
    (state: { user: User }) => state.user,
  );
  return (
    <Wrapper>
      <H2>Kick player?</H2>
      <P>
        Do you really want to remove player
        <Span> {props.user.firstName + " " + props.user.lastName} </Span>
        from game session?
      </P>
      <ButtonsWrapper>
        <Button
          textContent="Yes"
          isLightTheme={false}
          onClick={() => {
            if (game.scrumMaster.id === user.id) {
              const roomId = game.roomID;
              const userId = props.user.id;
              dispatch(userDelete({ userId, roomId }));
            } else {
              //TODO user is not a scrum master
            }
            props.close();
          }}
        ></Button>
        <Button
          textContent="No"
          isLightTheme={true}
          onClick={() => {
            props.close();
          }}
        ></Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
