import api from "../api";

const HomeServices = {
  getSlideDefault: () => api.call().get("/slide-default"),
  getListeningWhatToday: (param) => api.call().get(`/listening-what-today?${param}`),
};

export default HomeServices;
