import styled from "styled-components";
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

export const Main = styled.main`
  position: relative;
  width: 100%;
  background-color: white;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% - 40px);
  max-width: 1000px;
  margin: 20px auto 0px;
  padding: 0 20px 100px;
`;
export const MainLogo = styled.img`
  display: block;
  width: 90%;
  max-width: 550px;
  margin: 0 auto;
  padding-top: 100px;
`;
export const MainPageTitle = styled.h2`
  margin: 30px 0 0 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #66999b;
`;
export const Label = styled.label`
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
  @media (${MediaQuery.tablet}) {
    width: 270px;
    gap: 10px;
  }
  @media (${MediaQuery.mobile}) {
    width: 270px;
    gap: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Input = styled.input`
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
