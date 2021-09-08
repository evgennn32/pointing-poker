import { FormikErrors, useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import {
  ButtonsWrapper,
  H2,
  WrapperIssue,
  OneInputWrapper,
  Input,
  Select,
  Label,
  Error,
  Button,
  CancelButton,
  Form,
  InputsWrapper,
} from "./PopUps.styled";

type Inputs = {
  title: string;
  link: string;
  priority: string;
};

export const PopUpCreateIssue = (): JSX.Element => {
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
      console.log(JSON.stringify(values, null, 2));
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
              <option value="Hight" label="Hight" />
            </Select>
            {formik.errors.priority && formik.touched.priority && (
              <Error className="input-feedback">{formik.errors.priority}</Error>
            )}
          </OneInputWrapper>
        </InputsWrapper>
        <ButtonsWrapper>
          <Button type="submit">Confirm</Button>
          <CancelButton type="button">Cancel</CancelButton>
        </ButtonsWrapper>
      </Form>
    </WrapperIssue>
  );
};
