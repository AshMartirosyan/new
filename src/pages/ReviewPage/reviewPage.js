import { useState } from "react";
import styled from "styled-components";
import { PlayerHeaderComponent, PlayerComponent } from "../../components";
import { ReactComponent as ExportPDFIcon } from "./exportPDF.svg";
import data from "./data.json";
import { map, filter } from "lodash";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export const BaseComponent = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: row;
`;

const DocumentComponent = styled.div`
  flex: 15;
  position: relative;
`;

const ButtonComponent = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

const ScrollableComponent = styled.div`
  display: flex;
  flex: 1;
  position: absolute;
  margin-left: 20px;
  margin-top: 20px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  justify-content: flex-start;
  border: 5px solid gray;
  border-radius: 10px;
  overflow-x: auto;
`;

const HeaderTextComponent = styled.div`
  padding: 10px;
  padding-left: 20px;
  font-size: 56px;
  color: #303f9f;
`;

const Divider = styled.div`
  height: 35px;
  width: 100%;
`;

export function ReviewPage() {
  const documnetRef = useRef();
  const exportAsPDFClicked = useReactToPrint({
    content: () => documnetRef.current,
  });

  return (
    <BaseComponent>
      <DocumentComponent>
        <ScrollableComponent>
          <div ref={documnetRef}>
            <HeaderTextComponent>Passquoten</HeaderTextComponent>
            <PlayerHeaderComponent />
            {map(
              filter(data.team, (player) => {
                return player.possition === "Torwart";
              }),
              (player) => (
                <PlayerComponent key={player.number} data={player} />
              )
            )}
            {map(
              filter(data.team, (player) => {
                return player.possition === "Mittelfeld";
              }),
              (player) => (
                <PlayerComponent key={player.number} data={player} />
              )
            )}
            <Divider />
            {map(
              filter(data.team, (player) => {
                return player.possition === "Mittelfeld";
              }),
              (player) => (
                <PlayerComponent key={player.number} data={player} />
              )
            )}

            <Divider />
            <PlayerComponent key="summary" data={data.summary} />
          </div>
        </ScrollableComponent>
      </DocumentComponent>
      <ButtonComponent>
        <ExportPDFIcon onClick={exportAsPDFClicked} />
      </ButtonComponent>
    </BaseComponent>
  );
}
