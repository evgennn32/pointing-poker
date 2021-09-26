import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { PopUpConnectToLobby } from "../PopUps/PopUpConnectToLobby";
import "reactjs-popup/dist/index.css";
import Chat from "../Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { RootState } from "../../app/store";
import { Redirect } from "react-router";

const Main = styled.main`
  position: relative;
  width: 100%;
  background-color: white;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% - 40px);
  max-width: 1000px;
  margin: 20px auto 0px;
  padding: 0 20px 100px;
`;
const MainLogo = styled.img`
  display: block;
  width: 90%;
  max-width: 550px;
  margin: 0 auto;
  padding-top: 100px;
`;
const MainPageTitle = styled.h2`
  margin: 30px 0 0 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #66999b;
`;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 450px;
  margin-top: 80px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Input = styled.input`
  width: 270px;
  height: 41px;
  padding: 0 0 0 10px;
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  border: 1px solid #2b3as67;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;
  :focus {
    outline: none;
  }
`;

export const MainPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  console.log("game name: ", game.roomName);
  if (game.roomID) {
    return <Redirect to="/lobby" />;
  }
  const clickHandler = () => {
    console.log("action");
  };

  return (
    <Main>
      <Chat />
      <MainLogo src="./images/MainLogo.png" />
      <Content>
        <MainPageTitle>Start your planning:</MainPageTitle>
        <Label>
          Create session:
          <Popup
            trigger={
              <Button
                textContent="Start new game"
                onClick={clickHandler}
                isLightTheme={false}
              />
            }
            position="right center"
            nested
            modal
          >
            {(close: () => void) => (
              <PopUpConnectToLobby
                close={close}
                createNewSession={true}
                dispatch={dispatch}
              />
            )}
          </Popup>
        </Label>
        <MainPageTitle>OR</MainPageTitle>
        <Label>
          Connect to lobby by URL:
          <InputWrapper>
            <Input />
            <Popup
              trigger={
                <Button
                  textContent="Connect"
                  onClick={clickHandler}
                  isLightTheme={false}
                />
              }
              position="right center"
              nested
              modal
            >
              {(close: () => void) => (
                <PopUpConnectToLobby
                  close={close}
                  createNewSession={false}
                  dispatch={dispatch}
                />
              )}
            </Popup>
          </InputWrapper>
        </Label>
      </Content>
    </Main>
  );
};
