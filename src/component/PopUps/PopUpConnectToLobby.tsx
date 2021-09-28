import { FormikErrors, useFormik } from "formik";
import React, { useEffect, useState } from "react";
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
import { createGame } from "../../app/slices/gameSlice";
import { AppDispatch, RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { userCreate, userUpdateState } from "../../app/slices/userSlice";
import { Redirect } from "react-router";
import User from "../../models/User";

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  jobPosition: string;
  avatar: File | null;
  connectAsObserver: boolean;
};

type Props = ClosePopUp & {
  createNewSession: boolean;
  dispatch: AppDispatch;
};

export function PopUpConnectToLobby(props: Props): JSX.Element {
  const [createGameProcess, setCreateGameProcess] = useState(false);
  const [redirectToLobby, setRedirectToLobby] = useState(false);
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const user = useSelector<RootState, User>(
    (state: { user: User }) => state.user,
  );
  const formik = useFormik<Inputs>({
    initialValues: {
      email: "",
      firstName: "Jhon",
      lastName: "Gold",
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
    onSubmit: (values: Inputs) => {
      // TODO handle image to blob
      const user = {
        id: "",
        image: "",
        firstName: values.firstName,
        lastName: values.lastName,
        position: values.jobPosition,
        currentUser: false,
        ableToDelete: true,
        score: "",
        scramMaster: props.createNewSession,
        observer: values.connectAsObserver,
      };
      if (props.createNewSession) {
        setCreateGameProcess(true);
        props.dispatch(createGame(user));
      } else {
        console.log("popup user", user);
        props.dispatch(userCreate({ user, roomId: game.roomID }));
      }
      //props.close();
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (props.createNewSession && game.roomID && createGameProcess) {
      props.dispatch(userUpdateState(game.scrumMaster));
    }
  }, [game]);
  useEffect(() => {
    if (props.createNewSession && game.roomID && createGameProcess) {
      setRedirectToLobby(true);
    }
    console.log("popup useffect user = ", user);
  }, [user]);

  if (redirectToLobby) {
    return <Redirect to="/lobby" />;
  }

  return (
    <WrapperConnectToLobby>
      <form onSubmit={formik.handleSubmit}>
        <FormWrapper>
          <InputsWrapperConnectToLobby>
            <H2>
              {props.createNewSession
                ? "Create new session"
                : "Connect to lobby"}
            </H2>
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
              {!props.createNewSession && (
                <>
                  <Label id="my-radio-group">Connect as Observer</Label>
                  <Switcher
                    name="connectAsObserver"
                    id="connect-as-observer"
                    isSwitched={formik.values.connectAsObserver}
                    onSwitch={formik.handleChange}
                  />
                </>
              )}
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
