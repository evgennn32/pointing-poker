import React from "react";
import { LogoWrapper, Square, SymbolBottom, SymbolTop } from "./Logo.styled";

const Logo = (): JSX.Element => {
  return (
    <LogoWrapper>
      <Square />
      <SymbolTop>P</SymbolTop>
      <SymbolBottom>P</SymbolBottom>
    </LogoWrapper>
  );
};

export default Logo;
