import React from "react";
import Title from "../Title/Title";
import { MembersWrapper } from "./Members.styled";
import User from "../../models/User";
import { UserAvatar } from "../UserAvatar/UserAvatar";

const Members = (props: { users: User[] }): JSX.Element => {
  return (
    <>
      <Title title="Members" />
      <MembersWrapper>
        {props.users.map((singleUser) => (
          <UserAvatar {...singleUser} key={singleUser.id} />
        ))}
      </MembersWrapper>
    </>
  );
};

export default Members;
