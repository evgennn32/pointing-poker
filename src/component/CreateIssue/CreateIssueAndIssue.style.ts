import styled from "styled-components";
import { ReactComponent as Plus } from "./../../assets/icons/plus-in-sircule.svg";
import { ReactComponent as Pencil } from "./../../assets/icons/pen.svg";
import { ReactComponent as Delete } from "./../../assets/icons/trash-bin.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
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
export const SVGPlus = styled(Plus)`
  width: 3em;
  height: 3em;
  vertical-align: middle;
  fill: #565d64;
  overflow: hidden;
`;
export const SVGPencil = styled(Pencil)`
  height: 3em;
  width: 3em;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
export const SVGDelete = styled(Delete)`
  width: 3em;
  height: 3em;
  vertical-align: middle;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
