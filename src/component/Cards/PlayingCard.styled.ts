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
export const EditIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
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

export const Checkmark = styled.div`
  display: inline-block;
  width: 45px;
  height: 45px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
`;
export const Checkmark_circle = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  background-color: #60dabf;
  border-radius: 50%;
  left: 0;
  top: 0;
`;
export const Checkmark_stem = styled.div`
  position: absolute;
  width: 3px;
  height: 20px;
  background-color: #fff;
  left: 21px;
  top: 7px;
`;
export const Checkmark_kick = styled.div`
  position: absolute;
  width: 9px;
  height: 3px;
  background-color: #fff;
  left: 15px;
  top: 25px;
`;
export const Checkmark_bottom = styled.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: #fff;
  left: 19px;
  top: 27px;
  transform: rotate(135deg);
`;

export const CheckedCover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(96, 218, 191, 0.46);
  border-radius: 8px;
`;
