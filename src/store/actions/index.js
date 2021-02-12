import { GET_PROFILES, LOADING, ERROR } from "../types";

export const getProfile = (payload) => {
  return {
    type: GET_PROFILES,
    payload,
  };
};

export const loadProfiles = () => {
  return {
    type: LOADING,
  };
};

export const errorFetching = (payload) => {
  return {
    type: ERROR,
    payload,
  };
};
