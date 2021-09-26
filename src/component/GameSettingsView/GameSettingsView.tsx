import React, { useEffect, useState } from "react";
import GameSettings from "../../models/GameSettings";
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
} from "./GameSettingsView.style";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";

type GameSettingsProps = {
  setGameSetting: (gameSettings: GameSettings) => void;
};
console.log("game = ");

export const GameSettingsView = (props: GameSettingsProps): JSX.Element => {
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const InitialCards = [
    {
      value: "unknown",
      type: "cup",
      shortType: "",
      selected: false,
      closed: false,
      editable: true,
    },
    {
      value: "12",
      type: "story point",
      shortType: "SP",
      selected: false,
      closed: false,
      editable: true,
    },
    {
      value: "12",
      type: "story point",
      shortType: "SP",
      selected: false,
      closed: false,
      editable: true,
    },
    {
      value: "12",
      type: "story point",
      shortType: "SP",
      selected: false,
      closed: false,
      editable: true,
    },
  ];
  const [settings, setSettings] = useState<GameSettings>({
    gameInProgress: false,
    scrumMasterAsPlayer: true,
    changingCardInRoundEnd: false,
    isTimerNeeded: true,
    scoreType: "story point",
    scoreTypeShort: "SP",
    roundTime: 0,
    cardsArray: InitialCards,
  });
  useEffect(() => {
    props.setGameSetting(settings);
  }, [settings]);
  return (
    <Wrapper>
      <Title title="Game settings:" />
      <InputsSwitchersWrapper>
        <OneSettingWrapper>
          <Label>Scrum master as player:</Label>
          <Switcher
            name="scrumMasterAsPlayer"
            id="scrum-master-as-player"
            isSwitched={settings.scrumMasterAsPlayer}
            onSwitch={(ev) => {
              setSettings({
                ...settings,
                scrumMasterAsPlayer: ev.target.checked,
              });
            }}
          />
        </OneSettingWrapper>
        <OneSettingWrapper>
          <Label>Changing card in round end:</Label>
          <Switcher
            name="changingCardInRoundEnd"
            id="changing-card-in-round-end"
            isSwitched={settings.changingCardInRoundEnd}
            onSwitch={(ev) => {
              setSettings({
                ...settings,
                changingCardInRoundEnd: ev.target.checked,
              });
            }}
          />
        </OneSettingWrapper>
        <OneSettingWrapper>
          <Label>Is timer needed:</Label>
          <Switcher
            name="isTimerNeeded"
            id="is-timer-needed"
            isSwitched={settings.isTimerNeeded}
            onSwitch={(ev) => {
              setSettings({
                ...settings,
                isTimerNeeded: ev.target.checked,
              });
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
              setSettings({
                ...settings,
                scoreType: ev.target.value,
              });
            }}
            value={settings.scoreType}
          />
        </OneSettingWrapper>
        <OneSettingWrapper>
          <Label htmlFor="scoreTypeShort">Score type (short):</Label>
          <Input
            id="scoreTypeShort"
            name="scoreTypeShort"
            type="text"
            onChange={(ev) => {
              setSettings({
                ...settings,
                scoreTypeShort: ev.target.value,
              });
            }}
            value={settings.scoreTypeShort}
          />
        </OneSettingWrapper>
        <OneSettingWrapper>
          <Label>Round time:</Label>
          <Timer readOnly={true}></Timer> {/* TODO timer need to be finished */}
        </OneSettingWrapper>
      </InputsSwitchersWrapper>
      <Label>Add card values:</Label>
      <CardsWrapper>
        {game.cards.map((card, index) => (
          <PlayingCard
            value={card.value}
            type={card.type}
            shortType={card.shortType}
            selected={card.selected}
            closed={card.closed}
            editable={card.editable}
            key={index}
          />
        ))}
        <PlayingCardAdd
          onClick={() => {
            setSettings({
              ...settings,
              cardsArray: settings.cardsArray.concat({
                value: "12",
                type: "",
                shortType: settings.scoreTypeShort,
                selected: false,
                closed: false,
                editable: true,
              }),
            });
          }}
        />
      </CardsWrapper>
    </Wrapper>
  );
};
