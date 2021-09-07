import React from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  background-color: white;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100px;
  margin: 0 auto;
`;

export const MainPage = (): JSX.Element => (
  <Main>
    <Content>form</Content>
  </Main>
);
