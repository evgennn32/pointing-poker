import React, { useEffect, useState } from "react";
import {
  PenIconWrapper,
  TitleContent,
  TitleInput,
  TitleWrapper,
} from "./Title.styled";
import { ReactComponent as PenIcon } from "./../../assets/icons/pen.svg";

interface TitleEditableProps {
  title: string;
  changeTitle: (title: string) => void;
}

const TitleEditable = (props: TitleEditableProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const textInput = React.useRef<HTMLInputElement>(null);
  const focusInput = (): void => {
    if (textInput.current) {
      textInput.current.focus();
    }
  };
  useEffect(() => {
    if (isEditing) {
      focusInput();
    }
  }, [isEditing]);
  const showHideEditInput = () => {
    setIsEditing(!isEditing);
  };
  const editTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    props.changeTitle(e.target.value);
  };
  return (
    <TitleWrapper>
      {!isEditing && <TitleContent>{props.title}</TitleContent>}
      {isEditing && (
        <TitleInput
          onChange={editTitle}
          onBlur={showHideEditInput}
          value={props.title}
          ref={textInput}
        />
      )}
      {!isEditing && (
        <PenIconWrapper onClick={showHideEditInput}>
          <PenIcon />
        </PenIconWrapper>
      )}
    </TitleWrapper>
  );
};

export default TitleEditable;
