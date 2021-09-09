import { FormikErrors, useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import "./ReactPopUpDefault.css";
import { Button } from "../Button/Button";
import { Input } from "../styledComponents/Input/Input";
import Switcher from "../Switcher/Switcher";
import { ClosePopUp } from "./ClosePopUp";
import {
  FormWrapper,
  H2,
  Label,
  ConnectAsObserver,
  Error,
  ConnectAsObserverAndCancel,
  InputImage,
  Initials,
  WrapperConnectToLobby,
  InputsWrapperConnectToLobby,
  OneInputWrapperConnectToLobby,
  Avatar,
} from "./PopUps.styled";

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  jobPosition: string;
  avatar: File | null;
  connectAsObserver: boolean;
};

export function PopUpConnectToLobby(props: ClosePopUp): JSX.Element {
  const formik = useFormik<Inputs>({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      jobPosition: "",
      avatar: null,
      connectAsObserver: false,
    },
    validate: (values: Inputs) => {
      const errors: FormikErrors<Inputs> = {};
      if (!values.firstName) {
        errors.firstName = "Enter your name";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      props.close();
      formik.resetForm();
    },
  });
  return (
    <WrapperConnectToLobby>
      <form onSubmit={formik.handleSubmit}>
        <FormWrapper>
          <InputsWrapperConnectToLobby>
            <H2>Connect to lobby</H2>
            <OneInputWrapperConnectToLobby>
              <Label htmlFor="firstName">Your first name:</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </OneInputWrapperConnectToLobby>
            <OneInputWrapperConnectToLobby>
              <Label htmlFor="lastName">Your last name (optional):</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </OneInputWrapperConnectToLobby>
            <OneInputWrapperConnectToLobby>
              <Label htmlFor="jobPosition">Your job position (optional):</Label>
              <Input
                id="jobPosition"
                name="jobPosition"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.jobPosition}
              />
            </OneInputWrapperConnectToLobby>
            <OneInputWrapperConnectToLobby>
              <Label htmlFor="email">Your email (optional):</Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </OneInputWrapperConnectToLobby>
            <OneInputWrapperConnectToLobby>
              <Label htmlFor="image">Image:</Label>
              <InputImage
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  if (event.currentTarget.files !== null) {
                    formik.setFieldValue(
                      "avatar",
                      event.currentTarget.files[0],
                    );
                  }
                }}
                className="form-control"
              />
              <Avatar
                avatar={
                  formik.values.avatar === null
                    ? ""
                    : URL.createObjectURL(formik.values.avatar)
                }
              >
                {formik.values.firstName !== "" &&
                  formik.values.avatar === null && (
                    <Initials>{formik.values.firstName[0]}</Initials>
                  )}
                {formik.values.lastName !== "" &&
                  formik.values.avatar === null && (
                    <Initials>{formik.values.lastName[0]}</Initials>
                  )}
              </Avatar>
            </OneInputWrapperConnectToLobby>
            <Button textContent="Confirm" isLightTheme={false}></Button>
          </InputsWrapperConnectToLobby>
          <ConnectAsObserverAndCancel>
            <ConnectAsObserver>
              <Label id="my-radio-group">Connect as Observer</Label>
              <Switcher
                name="connectAsObserver"
                id="connect-as-observer"
                isSwitched={formik.values.connectAsObserver}
                onSwitch={formik.handleChange}
              />
            </ConnectAsObserver>
            <Error>
              {formik.touched.firstName &&
                formik.errors.firstName &&
                formik.errors.firstName}
            </Error>
            <Button
              textContent="Cancel"
              onClick={(e) => {
                formik.handleReset(e);
                props.close();
              }}
              isLightTheme={true}
            ></Button>
          </ConnectAsObserverAndCancel>
        </FormWrapper>
      </form>
    </WrapperConnectToLobby>
  );
}
