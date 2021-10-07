import React from "react";
import Logo from "../Logo/Logo";
import {
  Content,
  GithubLink,
  LinkWrapper,
  LogoWrapper,
  RSLogo,
  Wrapper,
} from "./Footer.styled";

export const Footer = (): JSX.Element => (
  <Wrapper>
    <Content>
      <LogoWrapper>
        <Logo />
        2021
      </LogoWrapper>
      <LinkWrapper>
        <GithubLink href="https://github.com/KorvinAtreides">
          @KorvinAtreides
        </GithubLink>
        <GithubLink href="https://github.com/evgennn32">@evgennn32</GithubLink>
        <GithubLink href="https://github.com/IamDarya">@IamDarya</GithubLink>
      </LinkWrapper>
      <a href="https://rs.school/react/">
        <RSLogo src="https://rs.school/images/rs_school_js.svg" alt="RS-logo" />
      </a>
    </Content>
  </Wrapper>
);
