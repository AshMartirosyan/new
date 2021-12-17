import axios from "axios";

const localhostEnv = process.env.REACT_APP_API_URL;

const apiController = async ({
  url = "/",
  method = "get",
  data = null,
  params = null,
}) => {
  const token = sessionStorage.getItem("token") || "";

  const config = {
    method,
    url: localhostEnv + url,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (data) {
    config.data = data;
  }
  if (params) {
    config.params = params;
  }

  try {
    return await axios(config);
  } catch (err) {
    alert(err);
  }
};

export default apiController;
