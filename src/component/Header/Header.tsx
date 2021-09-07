import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { ReactComponent as ChatIcon } from "./../../assets/icons/chat-icon.svg";

const HeaderWrapper = styled.header`
  position: relative;
`;
const TopBackground = styled.div`
  width: 100%;
  height: 50px;
  background-color: #2b3a67;
`;
const BottomBackground = styled.div`
  width: 100%;
  height: 20px;
  background-color: #66999b;
`;
const ContentWrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 10px 27px;
`;
const ChatIconWrapper = styled.div`
  cursor: pointer;
`;
const LogoWrapper = styled.a`
  margin-left: 35px;
  position: relative;
  top: 5px;
`;

const Header = (): JSX.Element => {
  // chatActive will be provided by redux store
  const chatActive = true;

  return (
    <HeaderWrapper>
      <TopBackground />
      <BottomBackground />
      <ContentWrapper>
        <LogoWrapper href="/">
          <Logo />
        </LogoWrapper>
        {chatActive && (
          <ChatIconWrapper>
            <ChatIcon />
          </ChatIconWrapper>
        )}
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
