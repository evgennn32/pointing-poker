import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { PopUpConnectToLobby } from "../PopUps/PopUpConnectToLobby";
import "reactjs-popup/dist/index.css";

const Main = styled.main`
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
  margin: 20px auto 100px;
  padding: 0 20px;
`;

const MainLogo = styled.img`
  display: block;
  width: 90%;
  max-width: 550px;
  margin: 100px auto 0;
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
`;

const clickHandler = () => {
  console.log("click");
};

export const MainPage = (): JSX.Element => (
  <Main>
    <MainLogo src="./images/MainLogo.png" />
    <Content>
      <MainPageTitle>Start your planning:</MainPageTitle>
      <Label>
        Create session:
        <Button
          textContent="Start new game"
          onClick={clickHandler}
          isLightTheme={false}
        />
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
            {(close: () => void) => <PopUpConnectToLobby close={close} />}
          </Popup>
        </InputWrapper>
      </Label>
    </Content>
  </Main>
);
