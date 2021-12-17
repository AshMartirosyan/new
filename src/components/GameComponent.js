import styled from "styled-components";

export const Divider = styled.div`
  width: 1px;
  margin: 5px 2px 5px;
  background-color: #757575;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  margin: 5px;
  min-height: 48px;
  min-width: 1300px;
  border-radius: 7px;
  background-color: #a5d6a7;
  ${(props) =>
    props.type === "player"
      ? `&:hover {
        opacity: 0.5;
        cursor: pointer;
      }`
      : null}
`;

const GameNumber = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-left: 5px;
  margin: 2px;
  background-color: #75a478;
  font-family: Righteous;
  font-size: 12px;
  color: #black;
`;
const TourNumber = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-left: 5px;
  margin: 2px;
  background-color: #75a478;
  font-family: Righteous;
  font-size: 12px;
  color: #black;
`;
const OponentName = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-left: 5px;
  margin: 2px;
  background-color: #75a478;
  font-family: Righteous;
  font-size: 12px;
  color: #black;
`;
const Score = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-left: 5px;
  margin: 2px;
  background-color: #75a478;
  font-family: Righteous;
  font-size: 12px;
  color: #black;
`;
const Date = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-left: 5px;
  margin: 2px;
  background-color: #75a478;
  font-family: Righteous;
  font-size: 12px;
  color: #black;
`;

export const GameComponent = (props) => {
  return (
    <GameContainer type={props.data.type}>
      <GameNumber>{props.data.gameNumber}</GameNumber>
      <Divider />
      <TourNumber>{props.data.tourNumber}</TourNumber>
      <Divider />
      <OponentName>{props.data.oponentName}</OponentName>
      <Divider />
      <Score>{props.data.score}</Score>
      <Divider />
      <Date>{props.data.date}</Date>
    </GameContainer>
  );
};
