import styled from "styled-components";
import { MediaQuery } from "../MediaQuery/MediaQuery";

export const Input = styled.input`
  width: 270px;
  height: 41px;
  padding: 0 0 0 10px;
  margin: 0;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  border: 1px solid #2b3a67;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 0 10px;
  &:focus {
    outline: none;
  }
  @media (${MediaQuery.mobile}) {
    width: 200px;
    height: 25px;
    font-size: 18px;
  }
`;
