import { fetchAPI } from "../api/api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (date) => {
  return fetchAPI(new Date(date));
};
