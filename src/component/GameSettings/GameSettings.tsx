import { FormikErrors, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayingCard from "../Cards/PlayingCard";
import PlayingCardAdd from "../Cards/PlayingCardAdd";
import { Input } from "../styledComponents/Input/Input";
import Switcher from "../Switcher/Switcher";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";
import {
  Wrapper,
  OneSettingWrapper,
  CardsWrapper,
  Label,
  InputsSwitchersWrapper,
} from "./GameSettings.style";

export type GameSettings = {
  scrumMasterAsPlayer: boolean;
  changingCardInRoundEnd: boolean;
  isTimerNeeded: boolean;
  scoreType: string;
  scoreTypeShort: string;
  roundTime: string;
};
type GameSettingsProps = {
  setGameSetting: (gameSettings: GameSettings) => void;
};
type Card = {
  value: string;
  type: string;
  shortType: string;
  selected: boolean;
  closed: boolean;
  editable: boolean;
};

export const GameSettings = (props: GameSettingsProps): JSX.Element => {
  const formik = useFormik<GameSettings>({
    initialValues: {
      scrumMasterAsPlayer: true,
      changingCardInRoundEnd: false,
      isTimerNeeded: true,
      scoreType: "story point",
      scoreTypeShort: "SP",
      roundTime: "",
    },
    validate: (values: GameSettings) => {
      const errors: FormikErrors<GameSettings> = {};
      if (!values.scoreType) {
        errors.scoreType = "Enter score type";
      }
      return errors;
    },
    onSubmit: () => {
      // console.log(JSON.stringify(values, null, 2));
      // formik.resetForm();
    },
  });
  useEffect(() => {
    props.setGameSetting(formik.values);
  }, [formik]);

  const InitialCards = [
    {
      value: "12",
      type: "cup",
      shortType: formik.values.scoreTypeShort,
      selected: false,
      closed: false,
      editable: true,
    },
    {
      value: "12",
      type: formik.values.scoreType,
      shortType: formik.values.scoreTypeShort,
      selected: false,
      closed: false,
      editable: true,
    },
    {
      value: "12",
      type: formik.values.scoreType,
      shortType: formik.values.scoreTypeShort,
      selected: false,
      closed: false,
      editable: true,
    },
    {
      value: "12",
      type: formik.values.scoreType,
      shortType: formik.values.scoreTypeShort,
      selected: false,
      closed: false,
      editable: true,
    },
  ];
  const [cardsArray, setCardsArray] = useState<Card[]>(InitialCards);
  const ArrayCards = cardsArray.map((card, index) => {
    <PlayingCard
      value={card.value}
      type={card.type}
      shortType={card.shortType}
      selected={card.selected}
      closed={card.closed}
      editable={card.editable}
      key={index}
    />;
  });
  return (
    <Wrapper>
      <Title title="Game settings:" />
      <InputsSwitchersWrapper>
        <OneSettingWrapper>
          <Label>Scrum master as player:</Label>
          <Switcher
            name="scrumMasterAsPlayer"
            id="scrum-master-as-player"
            isSwitched={formik.values.scrumMasterAsPlayer}
            onSwitch={(ev) => {
              formik.handleChange(ev);
            }}
          />
        </OneSettingWrapper>
        <OneSettingWrapper>
          <Label>Changing card in round end:</Label>
          <Switcher
            name="changingCardInRoundEnd"
            id="changing-card-in-round-end"
            isSwitched={formik.values.changingCardInRoundEnd}
            onSwitch={(ev) => {
              formik.handleChange(ev);
            }}
          />
        </OneSettingWrapper>
        <OneSettingWrapper>
          <Label>Is timer needed:</Label>
          <Switcher
            name="isTimerNeeded"
            id="is-timer-needed"
            isSwitched={formik.values.isTimerNeeded}
            onSwitch={(ev) => {
              formik.handleChange(ev);
            }}
          />
        </OneSettingWrapper>
        <OneSettingWrapper>
          <Label htmlFor="scoreType">Score type:</Label>
          <Input
            id="scoreType"
            name="scoreType"
            type="text"
            onChange={(ev) => {
              formik.handleChange(ev);
            }}
            value={formik.values.scoreType}
          />
        </OneSettingWrapper>
        <OneSettingWrapper>
          <Label htmlFor="scoreTypeShort">Score type (short):</Label>
          <Input
            id="scoreTypeShort"
            name="scoreTypeShort"
            type="text"
            onChange={(ev) => {
              formik.handleChange(ev);
            }}
            value={formik.values.scoreTypeShort}
          />
        </OneSettingWrapper>
        <OneSettingWrapper>
          <Label>Round time:</Label>
          <Timer readOnly={true}></Timer> {/* timer need to be finished */}
        </OneSettingWrapper>
      </InputsSwitchersWrapper>
      <Label>Add card values:</Label>
      <CardsWrapper>
        {ArrayCards}
        <PlayingCardAdd />
      </CardsWrapper>
    </Wrapper>
  );
};
