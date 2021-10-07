import { FormikErrors, useFormik } from "formik";
import React from "react";
import "./ReactPopUpDefault.css";
import { Button } from "../Button/Button";
import { Input } from "../styledComponents/Input/Input";
import { ClosePopUp } from "./ClosePopUp";
import {
  ButtonsWrapper,
  H2,
  WrapperIssue,
  OneInputWrapper,
  Select,
  Label,
  Error,
  Form,
  InputsWrapper,
} from "./PopUps.styled";
import { useDispatch, useSelector } from "react-redux";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { RootState } from "../../app/store";
import { issueAdd } from "../../app/slices/gameSlice";

type Inputs = {
  title: string;
  link: string;
  priority: string;
};

export const PopUpCreateIssue = (props: ClosePopUp): JSX.Element => {
  const dispatch = useDispatch();
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const formik = useFormik<Inputs>({
    initialValues: {
      title: "",
      link: "",
      priority: "",
    },
    validate: (values: Inputs) => {
      const errors: FormikErrors<Inputs> = {};
      if (!values.priority) {
        errors.priority = "Select priority";
      }
      if (!values.title) {
        errors.title = "Add title";
      }
      if (!values.link) {
        errors.link = "Add link";
      }
      return errors;
    },
    onSubmit: (values) => {
      const issue = {
        priority: values.priority,
        issueName: values.title,
        link: values.link,
        id: "",
        selected: false,
        editable: false,
      };
      const roomId = game.roomID;
      dispatch(issueAdd({ issue, roomId }));
      props.close();
      formik.resetForm();
    },
  });
  return (
    <WrapperIssue>
      <Form onSubmit={formik.handleSubmit}>
        <H2>Create Issue</H2>
        <InputsWrapper>
          <OneInputWrapper>
            <Label htmlFor="title">Title:</Label>
            <Input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <Error>
              {formik.touched.title &&
                formik.errors.title &&
                formik.errors.title}
            </Error>
          </OneInputWrapper>
          <OneInputWrapper>
            <Label htmlFor="link">Link:</Label>
            <Input
              id="link"
              name="link"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.link}
            />
            <Error>
              {formik.touched.link && formik.errors.link && formik.errors.link}
            </Error>
          </OneInputWrapper>
          <OneInputWrapper>
            <Label htmlFor="priority">Priority</Label>
            <Select
              id="priority"
              name="priority"
              value={formik.values.priority}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ display: "block" }}
            >
              <option value="Select priority" label="Select priority" />
              <option value="Low" label="Low" />
              <option value="Medium" label="Medium" />
              <option value="High" label="High" />
            </Select>
            {formik.errors.priority && formik.touched.priority && (
              <Error className="input-feedback">{formik.errors.priority}</Error>
            )}
          </OneInputWrapper>
        </InputsWrapper>
        <ButtonsWrapper>
          <Button textContent="Yes" isLightTheme={false} />
          <Button
            textContent="No"
            onClick={(e) => {
              formik.handleReset(e);
              props.close();
            }}
            isLightTheme={true}
          />
        </ButtonsWrapper>
      </Form>
    </WrapperIssue>
  );
};
