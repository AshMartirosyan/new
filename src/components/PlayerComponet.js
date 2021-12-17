import styled from "styled-components";

const BaseComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 1400px;
  height: 64px;
  padding: 6px;
`;

const WithText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  height: 48px;
  font-family: Righteous;
  font-size: 20px;
  text-align: center;
  line-height: 20px;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 3px;
  margin-left: 3px;
  color: #fff;
`;

const NumberContainer = styled(WithText)`
  display: flex;
  flex: 1;
  margin-right: 0;
  margin-left: 0;
`;

const NameContainer = styled(WithText)`
  display: flex;
  flex: 4;
  justify-content: flex-start;
`;

const TimeContainer = styled(WithText)`
  display: flex;
  flex: 2;
`;

const AllPassesContainer = styled(WithText)`
  display: flex;
  flex: 2;
`;

const RightPassesContainer = styled(WithText)`
  display: flex;
  flex: 2;
`;
const WrongPassesContainer = styled(WithText)`
  display: flex;
  flex: 2.5;
`;
const LongPassesContainer = styled(WithText)`
  display: flex;
  flex: 2;
`;
const PercentContainer = styled(WithText)`
  display: flex;
  flex: 2;
`;
const Plus_MinusContainer = styled(WithText)`
  display: flex;
  flex: 3;
`;
const TorschussContainer = styled(WithText)`
  display: flex;
  flex: 2;
`;
const TorContainer = styled(WithText)`
  display: flex;
  flex: 1;
`;
const VorlagenContainer = styled(WithText)`
  display: flex;
  flex: 2;
`;

export const PlayerHeaderComponent = (props) => {
  return (
    <BaseComponent>
      <NumberContainer>Nr.</NumberContainer>
      <NameContainer>Spieler</NameContainer>
      <TimeContainer>Spielzeit</TimeContainer>
      <AllPassesContainer>Pässe gesamt</AllPassesContainer>
      <RightPassesContainer>Ange- kommen</RightPassesContainer>
      <WrongPassesContainer>Fehlpässe/ Ballverlust</WrongPassesContainer>
      <LongPassesContainer>Davon lang</LongPassesContainer>
      <PercentContainer>Passquote (%)</PercentContainer>
      <Plus_MinusContainer>+/- letztes Spiel</Plus_MinusContainer>
      <TorschussContainer>Torschuss</TorschussContainer>
      <TorContainer>Tor</TorContainer>
      <VorlagenContainer>Vorlagen</VorlagenContainer>
    </BaseComponent>
  );
};

export const PlayerComponent = (props) => {
  const {
    number,
    name,
    time,
    allPasses,
    rightPasses,
    wrongPasses,
    longPasses,
    percent,
    plusMinus,
    torschuss,
    tor,
    vorlagen,
    position,
  } = props.data;
  return (
    <BaseComponent>
      <NumberContainer style={{ backgroundColor: "#9e9e9e" }}>
        {number}
      </NumberContainer>
      <NameContainer style={{ backgroundColor: "#9e9e9e" }}>
        {name}
      </NameContainer>
      <TimeContainer style={{ color: "black" }}>
        {time ? `${time}. Min` : ""}
      </TimeContainer>
      <AllPassesContainer style={{ color: "black" }}>
        {allPasses}
      </AllPassesContainer>
      <RightPassesContainer
        style={{ backgroundColor: "#81c784", color: "black" }}
      >
        {rightPasses}
      </RightPassesContainer>
      <WrongPassesContainer
        style={{ backgroundColor: "#ff5c4b", color: "black" }}
      >
        {wrongPasses}
      </WrongPassesContainer>
      <LongPassesContainer style={{ color: "black" }}>
        {longPasses}
      </LongPassesContainer>
      <PercentContainer style={{ backgroundColor: "#9e9e9e" }}>
        {percent}
      </PercentContainer>
      <Plus_MinusContainer style={{ color: "black" }}>
        {plusMinus}
      </Plus_MinusContainer>
      <TorschussContainer style={{ color: "black" }}>
        {torschuss}
      </TorschussContainer>
      <TorContainer style={{ color: "black" }}>{tor}</TorContainer>
      <VorlagenContainer style={{ color: "black" }}>
        {vorlagen}
      </VorlagenContainer>
    </BaseComponent>
  );
};
