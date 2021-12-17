import {
  GETED_ALL_TEAMS,
  GETED_TEAMS_BY_ID,
  TEAM_SELECTED,
} from "../actions/team";
import { findIndex, map } from "lodash";

const initialState = {
  allTeams: [],
  selectedTeamId: "",
  gamesByTeamID: { teamId: "", games: [] },
};

const ClubReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETED_ALL_TEAMS: {
      return {
        ...state,
        allTeams: action.payload,
      };
    }
    case GETED_TEAMS_BY_ID: {
      return {
        ...state,
        gamesByTeamID: {
          teamId: action.payload.teamId,
          games: action.payload.data,
        },
      };
    }
    case TEAM_SELECTED: {
      return { ...state, selectedTeamId: action.payload.teamId };
    }
    default: {
      return state;
    }
  }
};

export default ClubReducer;
