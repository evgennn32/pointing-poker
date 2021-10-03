import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";
import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: #2b3a67;
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  max-width: 1920px;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 745px) {
    justify-content: center;
  }
  @media (${MediaQuery.mobile}) {
    row-gap: 15px;
    flex-direction: column;
    align-content: center;
  }
`;

export const RSLogo = styled.img`
  height: 50px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  color: white;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  min-width: 450px;
  max-width: 900px;
  height: 100px;
  @media (${MediaQuery.mobile}) {
    flex-direction: column;
    min-width: min-content;
  }
`;

export const GithubLink = styled.a`
  font-size: 22px;
  text-decoration: none;
  color: white;
`;
