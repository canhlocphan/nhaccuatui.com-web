// libs
import axios from "axios";

const BASE_URL = "https://my-json-server.typicode.com/canhlocphan/nhaccuatui.com-web-backend";

const api = {
  call() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  },
};

export default api;
