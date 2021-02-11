import { GET_PROFILES } from "../types";

export const getProfile = (payload) => {
  return {
    type: GET_PROFILES,
    payload,
  };
};
