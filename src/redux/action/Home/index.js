// actionType
import HOME_ACTION_TYPE from "../../../constants/actionType/Home";
// https
import HomeServices from "../../../https/Home";

export const getActionAlbumHot = (data) => ({
  type: HOME_ACTION_TYPE.ALBUM_HOT_SUCCESS,
  payload: { data },
});

export const getActionListeningWhatToday = (data) => ({
  type: HOME_ACTION_TYPE.LISTENING_WHAT_TODAY_SUCCESS,
  payload: { data },
});

export const loadAlbumHot = (param) => async (dispatch) => {
  try {
    const respone = await HomeServices.getAlbumHot(param);
    const { data } = respone;
    dispatch(getActionAlbumHot(data));
  } catch (err) {
    // console.log(err);
  }
};

export const loadListeningWhatToday = (param) => async (dispatch) => {
  try {
    const respone = await HomeServices.getListeningWhatToday(param);
    const { data } = respone;
    dispatch(getActionListeningWhatToday(data));
  } catch (err) {
    // console.log(err);
  }
};
