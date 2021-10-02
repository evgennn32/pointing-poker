import styled from "styled-components";
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

export const HeaderWrapper = styled.header`
  position: relative;
  @media (${MediaQuery.mobile}) {
    margin-bottom: 20px;
  }
`;
export const TopBackground = styled.div`
  width: 100%;
  height: 50px;
  background-color: #2b3a67;
`;
export const BottomBackground = styled.div`
  width: 100%;
  height: 20px;
  background-color: #66999b;
`;
export const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1920px;
  padding: 10px 27px;
`;
export const ChatIconWrapper = styled.div`
  cursor: pointer;
`;
export const LogoWrapper = styled.a`
  margin-left: 35px;
  position: relative;
  top: 5px;
`;
