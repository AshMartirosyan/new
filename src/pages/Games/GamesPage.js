import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GameComponent } from "../../components";
import { ScrollableComponent } from "../../components";
import gamesData from "./data.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGamesById } from "../../store/actions";
import { map, findIndex, isEqual } from "lodash";

const BaseComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

//To Do: Please implement horizontal scrolling.
export function GamesPage() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const errorCallback = useCallback(() => {
  //   navigate("/");
  // }, [navigate]);
  // const teamId = sessionStorage.hasOwnProperty("teamID")
  //   ? sessionStorage.getItem("teamID")
  //   : undefined;

  // const gamesByTeamId = useSelector((state) => {
  //   console.log("State: ", state);
  //   if (state.club.gamesByTeamID) {
  //     return state.club.gamesByTeamID;
  //   }
  // });

  // useEffect(() => {
  //   if (sessionStorage.getItem("token")) {
  //     if (sessionStorage.getItem("teamID")) {
  //       if (
  //         gamesByTeamId.games.length === 0 ||
  //         !isEqual(gamesByTeamId.teamId, teamId)
  //       ) {
  //         dispatch(getGamesById(teamId, errorCallback));
  //       }
  //     } else {
  //       navigate("/home");
  //       console.log("Club@ team chuni");
  //       //Not teams yet
  //     }
  //   } else {
  //     navigate("/");
  //   }
  // }, [gamesByTeamId]);

  return (
    <BaseComponent>
      {gamesData.data ? (
        <ScrollableComponent>
          <GameComponent
            data={{
              type: "header",
              gameNumber: "Game Number",
              tourNumber: "Tour Number",
              oponentName: "Oponent Name",
              score: "Score",
              date: "Date",
            }}
          />
          {map(gamesData.data, (game) => {
            return (
              <Link
                key={game.gameNumber}
                to="1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000" }}
              >
                <GameComponent data={{ type: "player", ...game }} />
              </Link>
            );
          })}
        </ScrollableComponent>
      ) : (
        "Not games Yet"
      )}
    </BaseComponent>
  );
}
