import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import "./pop-up.css";

const Wrapper = styled.div`
  width: calc(100% - 45%);
  height: 730px;
  border: 1px solid grey;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 20;
  padding: 50px;
`;
type AvatarImg = {
  avatar: File | null;
};
const Avatar = styled.div<AvatarImg>`
  background-image: url(${(props) =>
    props.avatar === null ? "" : URL.createObjectURL(props.avatar)});
  background-color: #60dabf;
  width: 76px;
  height: 76px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: inset 0px 4px 4px rgb(0 0 0 / 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% auto;
`;
const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
  height: 700px;
`;
const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 75px;
  margin: 0;
`;
const OneInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 5px 0;
  background: #ffffff;
  border: 1px solid #2b3a67;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;
  width: 467.12px;
  height: 47px;
`;
const InputImage = styled.input`
  margin: 5px 0;
`;
const Label = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;
const ConnectAsObserverAndCancel = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: space-between;
  height: 700px;
`;
const ConnectAsObserver = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 15px;
`;
const Button = styled.button`
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
const CancelButton = styled(Button)`
  background: white;
  color: #2b3a67;
  &:hover {
    text-shadow: 3px 3px 4px rgb(0 0 0 / 40%);
  }
`;
const Initials = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 56px;
  display: flex;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  top: -3px;
`;

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  jobPosition: string;
  avatar: File | null;
  connectAsObserver: boolean;
};

export function PopUpConnectToLobby(): JSX.Element {
  const formik = useFormik<Inputs>({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      jobPosition: "",
      avatar: null,
      connectAsObserver: false,
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });
  return (
    <Wrapper>
      <div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <FormWrapper>
              <InputsWrapper>
                <H2>Connect to lobby</H2>
                <div>
                  <OneInputWrapper>
                    <Label htmlFor="firstName">Your first name:</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      required
                    />
                  </OneInputWrapper>
                  <OneInputWrapper>
                    <Label htmlFor="lastName">Your last name (optional):</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                  </OneInputWrapper>
                  <OneInputWrapper>
                    <Label htmlFor="jobPosition">
                      Your job position (optional):
                    </Label>
                    <Input
                      id="jobPosition"
                      name="jobPosition"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.jobPosition}
                    />
                  </OneInputWrapper>
                  <OneInputWrapper>
                    <Label htmlFor="email">Your email (optional):</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </OneInputWrapper>
                  <OneInputWrapper>
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
                    <Avatar avatar={formik.values.avatar}>
                      {formik.values.firstName !== "" &&
                        formik.values.avatar === null && (
                          <Initials>{formik.values.firstName[0]}</Initials>
                        )}
                      {formik.values.lastName !== "" &&
                        formik.values.avatar === null && (
                          <Initials>{formik.values.lastName[0]}</Initials>
                        )}
                    </Avatar>
                  </OneInputWrapper>
                </div>
                <Button type="submit">Confirm</Button>
              </InputsWrapper>
              <ConnectAsObserverAndCancel>
                <ConnectAsObserver>
                  <div>
                    <Label id="my-radio-group">Connect as Observer</Label>
                  </div>
                  <Label className="switch">
                    <Input
                      type="checkbox"
                      onChange={() =>
                        (formik.values.connectAsObserver =
                          !formik.values.connectAsObserver)
                      }
                    />
                    <span className="slider round"></span>
                  </Label>
                </ConnectAsObserver>
                <CancelButton type="button">Cancel</CancelButton>
              </ConnectAsObserverAndCancel>
            </FormWrapper>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
