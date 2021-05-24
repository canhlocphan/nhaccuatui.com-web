// actionType
import HOME_ACTION_TYPE from "../../../constants/actionType/Home";
// https
import HomeServices from "../../../https/Home";

export const getActionSlideDefault = (data) => ({
  type: HOME_ACTION_TYPE.SLIDE_DEFAULT_SUCCESS,
  payload: { data },
});

export const getActionListeningWhatToday = (data) => ({
  type: HOME_ACTION_TYPE.LISTENING_WHAT_TODAY_SUCCESS,
  payload: { data },
});

export const loadSlideDefault = () => async (dispatch) => {
  try {
    const respone = await HomeServices.getSlideDefault();
    const { data } = respone;
    dispatch(getActionSlideDefault(data));
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
