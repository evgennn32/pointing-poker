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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { cardAdd } from "../../app/slices/gameSlice";

type GameSettingsProps = {
  setGameSetting: (gameSettings: GameSettings) => void;
};
console.log("game = ");

export const GameSettingsView = (props: GameSettingsProps): JSX.Element => {
  const dispatch = useDispatch();
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const [settings, setSettings] = useState<GameSettings>({
    gameInProgress: false,
    scrumMasterAsPlayer: true,
    changingCardInRoundEnd: false,
    isTimerNeeded: true,
    scoreType: "story point",
    scoreTypeShort: "SP",
    timeOut: false,
    roundTime: 0,
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
          <Timer readOnly={true} started={false}></Timer>
        </OneSettingWrapper>
      </InputsSwitchersWrapper>
      <Label>Add card values:</Label>
      <CardsWrapper>
        {game.cards.map((card) => (
          <PlayingCard {...card} key={card.id} />
        ))}
        <PlayingCardAdd
          onClick={() => {
            const card = {
              id: "",
              value: "12",
              type: "",
              shortType: game.gameSettings.scoreTypeShort,
              selected: false,
              closed: false,
              editable: true,
            };
            const roomId = game.roomID;
            dispatch(cardAdd({ card, roomId }));
          }}
        />
      </CardsWrapper>
    </Wrapper>
  );
};
