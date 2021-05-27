import api from "../api";

const HomeServices = {
  getAlbumHot: (param) => api.call().get(`/album-hot?${param}`),
  getListeningWhatToday: (param) => api.call().get(`/listening-what-today?${param}`),
};

export default HomeServices;
