import React from "react";
import Logo from "../Logo/Logo";
import { useDispatch } from "react-redux";
import { changeChatActive } from "../../app/slices/chatSlice";
import { ReactComponent as ChatIcon } from "./../../assets/icons/chat-icon.svg";
import {
  BottomBackground,
  ChatIconWrapper,
  Content,
  ContentWrapper,
  HeaderWrapper,
  LogoWrapper,
  TopBackground,
} from "./Header.styled";

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <HeaderWrapper>
      <TopBackground />
      <BottomBackground />
      <ContentWrapper>
        <Content>
          <LogoWrapper href="/">
            <Logo />
          </LogoWrapper>
          {window.location.pathname !== "/" && (
            <ChatIconWrapper onClick={() => dispatch(changeChatActive())}>
              <ChatIcon />
            </ChatIconWrapper>
          )}
        </Content>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
