import { GET_PROFILES, LOADING, ERROR } from "../types";

const initialState = {
  profile: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profile: action.payload,
        loading: true,
      };
    case LOADING:
      return {
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
