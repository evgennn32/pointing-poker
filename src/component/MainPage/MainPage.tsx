import React from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
  min-height: 100px;
  margin: 40px auto 0;
`;

const MainLogo = styled.img`
  width: 90%;
  max-width: 550px;
`;

export const MainPage = (): JSX.Element => (
  <Main>
    <Content>
      <MainLogo src="./images/MainLogo.png" />
    </Content>
  </Main>
);
