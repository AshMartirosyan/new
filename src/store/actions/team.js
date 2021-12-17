import { errorAction } from ".";
import teamApi from "../../api/team";

export const GETED_ALL_TEAMS = "GETED_ALL_TEAMS";
export const GETED_TEAMS_BY_ID = "GETED_TEAMS_BY_ID";
export const TEAM_SELECTED = "TEAM_SELECTED";

/*----------------- Middlewere -------------*/

export const getAllTeams = (errorCallback) => {
  return async function (dispatch) {
    return await teamApi
      .getAllTeams()
      .then((response) => {
        dispatch(getedAllTeam(response.data.data));
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch(errorAction(err.response.data));
        errorCallback();
      });
  };
};

export const getGamesById = (teamId, errorCallback) => {
  return async function (dispatch) {
    return await teamApi
      .getGamesById(teamId)
      .then((response) => {
        dispatch(getedGamesById(response.data.data.data, teamId));
      })
      .catch((err) => {
        dispatch(errorAction(err.response.data));
        errorCallback();
        console.log("Error ", err);
      });
  };
};

/*----------------- End Middlewere -------------*/

export const getedAllTeam = (data) => ({
  type: GETED_ALL_TEAMS,
  payload: data,
});

export const getedGamesById = (data, teamId) => ({
  type: GETED_TEAMS_BY_ID,
  payload: { data: data, teamId: teamId },
});

export const selectTeam = (teamId) => ({
  type: TEAM_SELECTED,
  payload: { teamId: teamId },
});
