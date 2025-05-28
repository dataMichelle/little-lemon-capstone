import { fetchAPI } from "../api/api";

export const initializeTimes = () => {
  const today = new Date();
  return {
    available: fetchAPI(today),
    unavailable: getMockUnavailableTimes(),
  };
};

export const updateTimes = (date) => {
  return {
    available: fetchAPI(new Date(date)),
    unavailable: getMockUnavailableTimes(),
  };
};

// Temporary hardcoded unavailable times for demo/testing
const getMockUnavailableTimes = () => {
  return ["19:00", "20:00"];
};
