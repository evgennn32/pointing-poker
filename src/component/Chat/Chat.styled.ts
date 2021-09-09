import styled from "styled-components";

export const ChatWrapper = styled.aside<{ active: boolean }>`
  position: sticky;
  float: right;
  top: 0;
  right: 20px;
  ${(props) => (props.active ? "display: inline-block;" : "display: none;")}
  border: 1px solid black;
  width: 300px;
  height: 600px;
  max-height: 60vh;
`;

export const ChatEnterWrapper = styled.div``;
