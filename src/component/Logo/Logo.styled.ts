import styled from "styled-components";

export const LogoWrapper = styled.div`
  z-index: 5;
  width: 70px;
  height: 70px;
  position: relative;
`;

export const Square = styled.div`
  transform: rotate(45deg);
  background-color: #ffc482;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 50px;
  height: 50px;
  margin: 10px;
`;

export const LogoSymbol = styled.span`
  position: absolute;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 35px;
  font-weight: 700;
  line-height: 0;
`;

export const SymbolTop = styled(LogoSymbol)`
  top: 15%;
  right: 20%;
  color: #66999b;
`;
export const SymbolBottom = styled(LogoSymbol)`
  bottom: 50%;
  left: 20%;
  color: #fff;
`;
