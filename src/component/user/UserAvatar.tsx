import React from "react";
import styled from "styled-components";

type UserAvatarProps = {
  avatar: string;
  name: string;
  position: string;
  currentUser: boolean;
};
type AvatarImg = {
  avatar: string;
};
const Avatar = styled.div<AvatarImg>`
  background-image: url(${(props) => props.avatar});
  width: 76px;
  height: 76px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;
const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-around;
  background-color: white;
`;
const NameAndPosition = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.p`
  margin: 3px;
  font-weight: bold;
`;
const SmallTxt = styled.p`
  margin: 3px;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: white;
`;

export const UserAvatar = (props: UserAvatarProps): JSX.Element => {
  return (
    <Wrapper>
      <Avatar avatar={props.avatar}></Avatar>
      <NameAndPosition>
        {props.currentUser && <SmallTxt>It&apos;s you!</SmallTxt>}
        <Name>{props.name}</Name>
        {props.position !== "" && <SmallTxt>{props.position}</SmallTxt>}
      </NameAndPosition>
      <Button>
        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 65.518 65.518"
          xmlSpace="preserve"
        >
          <g>
            <path
              fill="grey"
              d="M32.759,0C14.696,0,0,14.695,0,32.759s14.695,32.759,32.759,32.759s32.759-14.695,32.759-32.759S50.822,0,32.759,0z
		 M6,32.759C6,18.004,18.004,6,32.759,6c6.648,0,12.734,2.443,17.419,6.472L12.472,50.178C8.443,45.493,6,39.407,6,32.759z
		 M32.759,59.518c-5.948,0-11.447-1.953-15.895-5.248l37.405-37.405c3.295,4.448,5.248,9.947,5.248,15.895
		C59.518,47.514,47.514,59.518,32.759,59.518z"
            />
          </g>
        </svg>
      </Button>
    </Wrapper>
  );
};
