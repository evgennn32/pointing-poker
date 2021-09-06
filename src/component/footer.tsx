import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  background-color: #2b3a67;
`;

const Content = styled.div`
  width: calc(100% - 40px);
  max-width: 1920px;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
`;

const RSLogo = styled.img`
  height: 50px;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  min-width: 450px;
  max-width: 900px;
  height: 100px;
`;

const GithubLink = styled.a`
  font-size: 22px;
  text-decoration: none;
  color: white;
`;

export const Footer = (): JSX.Element =>  (
  <Wrapper>
    <Content>
      <LinkWrapper>
        <GithubLink href="https://github.com/KorvinAtreides">@KorvinAtreides</GithubLink>
        <GithubLink href="https://github.com/evgennn32">@evgennn32</GithubLink>
        <GithubLink href="https://github.com/IamDarya">@IamDarya</GithubLink>
      </LinkWrapper>
      <a href="https://rs.school/react/">
        <RSLogo src="https://rs.school/images/rs_school_js.svg" alt="RS-logo"/>
      </a>
    </Content>
  </Wrapper>
);
