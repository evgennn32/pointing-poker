import styled from "styled-components";
import { ReactComponent as Plus } from "./../../assets/icons/plus-in-sircule.svg";
import { ReactComponent as Delete } from "./../../assets/icons/trash-bin.svg";
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  @media (${MediaQuery.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
  & > div {
    width: 80%;
    margin: 0;
    justify-content: space-between;
    & > span > svg {
      height: 3em;
      width: 3em;
      vertical-align: middle;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
        transition: 0.3s;
      }
    }
    & > input {
      background-color: transparent;
      text-align: left;
    }
  }
`;
export const SVGWrapper = styled.div``;
export const Priority = styled.p`
  position: absolute;
  margin-top: 65px;
  @media (${MediaQuery.tablet}) {
    display: block;
    position: initial;
    margin: 0;
  }
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
  @media (${MediaQuery.tablet}) {
    margin: 0;
    line-height: 12px;
  }
`;
export const SVGPlus = styled(Plus)`
  width: 3em;
  height: 3em;
  vertical-align: middle;
  fill: #565d64;
  overflow: hidden;
  cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
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
