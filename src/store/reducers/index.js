import { GET_PROFILES } from "../types";

const initialState = {
  profile: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
