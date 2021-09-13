import styled from "styled-components";
import { Main } from "../Main/Main";
import { SideBar } from "../Sidebar/SideBar";

export const Page = styled.div<{ sidebarActive?: boolean }>`
  display: flex;
  max-width: 1920px;
  margin: 0 auto;
  ${Main} {
    flex-basis: ${(props) => (props.sidebarActive ? "70%" : "100%")};
  }
  ${SideBar} {
    display: ${(props) => (props.sidebarActive ? "block" : "none")};
  }
`;
