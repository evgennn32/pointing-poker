import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 71px;
  width: 100%;
`;

export const TitleContent = styled.h2`
  font-size: 24px;
  font-family: Ruda-Bold, sans-serif;
  line-height: 30px;
`;

export const PenIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const TitleInput = styled.input`
  width: 30%;
  min-width: 150px;
  text-align: center;
  font-size: 24px;
  font-family: Ruda-Bold, sans-serif;
  line-height: 30px;
  outline: none;
  border: none;
  margin-right: 40px;
`;
