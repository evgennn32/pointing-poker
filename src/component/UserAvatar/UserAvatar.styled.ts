import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-around;
  background-color: white;
`;
export const NameAndPosition = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.p`
  margin: 3px;
  font-weight: bold;
`;
export const SmallTxt = styled.p`
  margin: 3px;
`;
export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: white;
`;
