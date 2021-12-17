import styled from "styled-components";
import { PlayerHeaderComponent, PlayerComponent } from "../../components";
import data from "./data.json";
import { map, filter } from "lodash";
import { ScrollableComponent } from "../../components";

const BaseComponent = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  overflow: hidden;
`;

const PositionText = styled.h1`
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  color: #a5a1a1;
`;

export const TeamPage = () => {
  //Please change map() to filter()
  return (
    <BaseComponent>
      <ScrollableComponent>
        <PlayerHeaderComponent />
        <PositionText>Torwart</PositionText>
        {map(
          filter(data.team, (player) => {
            return player.possition === "Torwart";
          }),
          (player) => (
            <PlayerComponent key={player.number} data={player} />
          )
        )}
        <PositionText>Verteidigung</PositionText>
        {map(
          filter(data.team, (player) => {
            return player.possition === "Verteidigung";
          }),
          (player) => (
            <PlayerComponent key={player.number} data={player} />
          )
        )}
        <PositionText>Mittelfeld</PositionText>
        {map(
          filter(data.team, (player) => {
            return player.possition === "Mittelfeld";
          }),
          (player) => (
            <PlayerComponent key={player.number} data={player} />
          )
        )}

        <PositionText>Angriff</PositionText>
        {map(
          filter(data.team, (player) => {
            return player.possition === "Angriff";
          }),
          (player) => (
            <PlayerComponent key={player.number} data={player} />
          )
        )}
      </ScrollableComponent>
    </BaseComponent>
  );
};
