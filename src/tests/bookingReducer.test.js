import { initializeTimes, updateTimes } from "../utils/bookingReducer";

test("initializeTimes returns 6 time slots", () => {
  const times = initializeTimes();
  expect(times).toHaveLength(6);
  expect(times).toContain("18:00");
});

test("updateTimes returns default time slots", () => {
  const state = [];
  const action = { type: "UPDATE_TIMES", date: "2023-12-25" };
  const updated = updateTimes(state, action);
  expect(updated).toEqual(initializeTimes());
});
