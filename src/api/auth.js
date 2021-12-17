import apiController from "./index";

class AuthApi {
  constructor() {
    this.url = "/auth";
  }

  login = (data) => {
    return apiController({
      method: "post",
      url: this.url + "/login",
      data,
    });
  };

  signUp = (data) => {
    return apiController({
      method: "post",
      url: this.url + "/signup",
      data,
    });
  };

  getMe = () => {
    return apiController({
      method: "get",
      url: this.url + "/me",
    });
  };
}

const authApi = new AuthApi();

export default authApi;
