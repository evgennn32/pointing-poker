import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  background-color: white;
`;
export const SVGWrapper = styled.div``;
export const Priority = styled.p`
  position: absolute;
  margin-top: 65px;
`;
export const IssueName = styled.p`
  font-family: Ruda;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
export const SVG = styled.svg`
  width: 3em;
  height: 3em;
  vertical-align: middle;
  fill: #565d64;
  overflow: hidden;
`;
