import apiController from "./index";

class TeamApi {
  constructor() {
    this.url = "/team"; //prefix
  }

  getAllTeams = () => {
    return apiController({
      method: "get",
      url: this.url + "/teams/all",
    });
  };

  getGamesById = (teamId) => {
    return apiController({
      method: "get",
      url: this.url + `/${teamId}/games`,
    });
  };
}

const teamApi = new TeamApi();

export default teamApi;
