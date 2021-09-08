import { FormikErrors, useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import { ButtonsWrapper, H2, Wrapper } from "./PopUpKickPlayer";

const WrapperIssue = styled(Wrapper)`
  height: 650px;
`;
const OneInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 430px 150px;
  justify-items: baseline;
  align-items: center;
`;
const Input = styled.input`
  margin: 5px 0;
  background: #ffffff;
  border: 1px solid #2b3a67;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;
  width: 420px;
  height: 47px;
`;
const Select = styled.select`
  margin: 5px 0;
  background: #ffffff;
  border: 1px solid #2b3a67;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;
  width: 267px;
  height: 47px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;
const Label = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;
const Error = styled.span`
  justify-self: baseline;
  font-size: 1.5rem;
  color: red;
  align-self: center;
`;
export const Button = styled.button`
  background: #2b3a67;
  color: white;
  width: 189px;
  height: 60.3px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  &:hover {
    text-shadow: 3px 3px 4px rgb(0 0 0);
    cursor: pointer;
  }
`;
export const CancelButton = styled(Button)`
  background: white;
  color: #2b3a67;
  &:hover {
    text-shadow: 3px 3px 4px rgb(0 0 0 / 40%);
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
const InputsWrapper = styled.div`
  flex-grow: 1;
  margin-top: 60px;
`;
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
