import { GET_PROFILES, LOADING } from "../types";

const initialState = {
  profile: [],
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        loading: true,
      };

    default:
      return state;
  }
};

export default rootReducer;
