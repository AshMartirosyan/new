import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TeamCard } from "./teamCardComponent";
import { errorAction, getAllTeams, selectTeam } from "../../store/actions";
import styled from "styled-components";
import { map } from "lodash";

const BaseComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorCallback = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const allTeams = useSelector((state) => {
    if (state.club.allTeams) {
      return state.club.allTeams;
    }
  });

  //TO DO: Please optimize code to delete conditions
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      if (allTeams.length === 0) {
        dispatch(getAllTeams(errorCallback));
      }
    } else {
      navigate("/");
      dispatch(
        errorAction({
          statusCode: 401,
          message: "Unautorized",
          error: "Not token",
        })
      );
    }
  }, []);

  return (
    <BaseComponent>
      {map(allTeams, (team) => (
        <TeamCard
          key={team.id}
          onClick={() => {
            sessionStorage.setItem("teamID", team.id);
            dispatch(selectTeam(team.id));
            navigate("/club");
          }}
          teamName={team.name}
        />
      ))}
    </BaseComponent>
  );
}
