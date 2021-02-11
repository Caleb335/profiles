import { GET_PROFILES, LOADING } from "../types";

export const getProfile = (payload) => {
  return {
    type: GET_PROFILES,
    payload,
  };
};

export const loading = () => {
  return {
    type: LOADING,
  };
};
