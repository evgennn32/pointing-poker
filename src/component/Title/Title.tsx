import React from "react";
import { TitleContent, TitleWrapper } from "./Title.styled";

const Title = (props: { title: string }): JSX.Element => {
  return (
    <TitleWrapper>
      <TitleContent>{props.title}</TitleContent>
    </TitleWrapper>
  );
};

export default Title;
