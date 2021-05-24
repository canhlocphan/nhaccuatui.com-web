// actionType
import HOME_ACTION_TYPE from "../../../constants/actionType/Home";

const initialState = {
  loading: false,
  isLoading: false,
  slide: [],
  listen: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTION_TYPE.SLIDE_DEFAULT_SUCCESS:
      return {
        ...state,
        loading: true,
        slide: action.payload.data,
      };
    case HOME_ACTION_TYPE.LISTENING_WHAT_TODAY_SUCCESS:
      return {
        ...state,
        isLoading: true,
        listen: action.payload.data,
      };
    default:
      return state;
  }
};

export default HomeReducer;
