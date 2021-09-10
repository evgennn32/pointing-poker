import { FormikErrors, useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import PlayingCard from "../Cards/PlayingCard";
import PlayingCardAdd from "../Cards/PlayingCardAdd";
import { Input } from "../styledComponents/Input/Input";
import Switcher from "../Switcher/Switcher";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";

export const OneSettingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardsWrapper = styled(OneSettingWrapper)`
  display: flex;
  flex-wrap: wrap;
`;
export const Wrapper = styled.form`
  width: 549px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Label = styled.label`
  font-size: 24px;
  font-family: Ruda-Bold, sans-serif;
  line-height: 30px;
`;

type Inputs = {
  scrumMasterAsPlayer: boolean;
  changingCardInRoundEnd: boolean;
  isTimerNeeded: boolean;
  scoreType: string;
  scoreTypeShort: string;
  roundTime: string;
};

export const GameSettings = (): JSX.Element => {
  const formik = useFormik<Inputs>({
    initialValues: {
      scrumMasterAsPlayer: true,
      changingCardInRoundEnd: false,
      isTimerNeeded: true,
      scoreType: "story point",
      scoreTypeShort: "SP",
      roundTime: "",
    },
    validate: (values: Inputs) => {
      const errors: FormikErrors<Inputs> = {};
      if (!values.scoreType) {
        errors.scoreType = "Enter your name";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });
  return (
    <Wrapper>
      <Title title="Game settings:" />
      <OneSettingWrapper>
        <Label>Scrum master as player:</Label>
        <Switcher
          name="scrumMasterAsPlayer"
          id="scrum-master-as-player"
          isSwitched={formik.values.scrumMasterAsPlayer}
          onSwitch={formik.handleChange}
        />
      </OneSettingWrapper>

      <OneSettingWrapper>
        <Label>Changing card in round end:</Label>
        <Switcher
          name="changingCardInRoundEnd"
          id="changing-card-in-round-end"
          isSwitched={formik.values.changingCardInRoundEnd}
          onSwitch={formik.handleChange}
        />
      </OneSettingWrapper>

      <OneSettingWrapper>
        <Label>Is timer needed:</Label>
        <Switcher
          name="isTimerNeeded"
          id="is-timer-needed"
          isSwitched={formik.values.isTimerNeeded}
          onSwitch={formik.handleChange}
        />
      </OneSettingWrapper>

      <OneSettingWrapper>
        <Label htmlFor="scoreType">Score type:</Label>
        <Input
          id="scoreType"
          name="scoreType"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.scoreType}
        />
      </OneSettingWrapper>

      <OneSettingWrapper>
        <Label htmlFor="scoreTypeShort">Score type (short):</Label>
        <Input
          id="scoreTypeShort"
          name="scoreTypeShort"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.scoreTypeShort}
        />
      </OneSettingWrapper>

      <OneSettingWrapper>
        <Title title="Round time:" />
        <Timer readOnly={true}></Timer>
      </OneSettingWrapper>

      <Title title="Add card values:" />
      <CardsWrapper>
        <PlayingCard
          value="12"
          type="cup"
          shortType={formik.values.scoreTypeShort}
          selected={false}
          closed={false}
          editable={true}
        />
        <PlayingCard
          value="12"
          type=""
          shortType={formik.values.scoreTypeShort}
          selected={false}
          closed={false}
          editable={true}
        />
        <PlayingCard
          value="12"
          type=""
          shortType={formik.values.scoreTypeShort}
          selected={false}
          closed={false}
          editable={true}
        />
        <PlayingCard
          value="12"
          type=""
          shortType={formik.values.scoreTypeShort}
          selected={false}
          closed={false}
          editable={true}
        />
        <PlayingCardAdd />
      </CardsWrapper>
    </Wrapper>
  );
};
