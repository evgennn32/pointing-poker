import React from 'react';
import styled from "styled-components";


const LogoWrapper = styled.div`
width: 70px;
height: 70px;
position: relative;
`;

const Square = styled.div`
transform: rotate(45deg);
background-color: #FFC482;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
width: 50px;
height: 50px;
margin: 10px;
`;

const LogoSymbol = styled.span`
position: absolute;
text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
font-size: 35px;
font-weight: 700;
line-height: 0;
`;

const SymbolTop = styled(LogoSymbol)`
top: 15%;
right: 20%;
color: #66999B; 
`;
const SymbolBottom = styled(LogoSymbol)`
bottom: 50%;
left: 20%;
color: #fff;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Square />
      <SymbolTop>P</SymbolTop>
      <SymbolBottom>P</SymbolBottom>
    </LogoWrapper>
  );
};

export default Logo;