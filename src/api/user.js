import apiController from "./index";

class UserApi {
  constructor() {
    this.url = "/user";
  }

  changePassword = (data) => {
    return apiController({
      method: "post",
      url: this.url + "/password/change",
      data,
    });
  };
}

const userApi = new UserApi();

export default userApi;
