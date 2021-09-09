import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100px;
  height: 160px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #d2d2d2;
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  margin: 20px;
`;
export const TopContent = styled.div`
  height: 20%;
`;
export const CenterContent = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 600;
  font-family: Roboto-Bold, sans-serif;
`;
export const BottomContent = styled.div`
  height: 20%;
  transform: rotate(180deg);
`;
interface EditIconProps {
  readonly isActive: boolean;
}
export const EditIcon = styled.div<EditIconProps>`
  position: absolute;
  top: 10px;
  right: 15px;
  display: ${(props) => (props.isActive ? "block" : "none")};
  cursor: pointer;
`;
export const CartAdd = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: -1px 5px 15px 0 rgba(0, 0, 0, 0.5);
  }
`;
