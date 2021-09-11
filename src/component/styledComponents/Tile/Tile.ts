import styled from "styled-components";

export const Tile = styled.div<{ selected?: boolean }>`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-around;
  background-color: ${(props) => (props.selected ? "#60dabf" : "white")};
  -webkit-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  margin: 20px;
`;
