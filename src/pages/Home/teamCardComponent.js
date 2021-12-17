import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 116px;
  width: 551px;
  margin: 20px;
  border: 1px solid rgba(113, 253, 30, 0.27);
  background-color: rgba(155, 155, 155, 0.14);
  backdrop-filter: blur(30px);
  box-sizing: border-box;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 1px solid rgba(113, 253, 30, 0.81);
    cursor: pointer;
  }
`;
const TeamNameConatainer = styled.div`
  width: 168px;
  height: 20px;
  font-family: Helvetica Neue LT Std;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.8);
`;

const TeamContainer = styled.div`
  margin-top: 21px;
  font-family: Helvetica Neue LT Std;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.8);
`;

export const TeamCard = (props) => {
  return (
    <Card key={props.key} onClick={props.onClick}>
      <TeamNameConatainer>Team name</TeamNameConatainer>
      <TeamContainer>{props.teamName}</TeamContainer>
    </Card>
  );
};
