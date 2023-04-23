import { createSlice } from "@reduxjs/toolkit";

export const FlightData = createSlice({
  name: "flightdata",
  initialState: {
    data: null,
  },
  reducers: {
    checkFlights: (state, action) => {
      state.data = action.payload;
    },
    RemoveFlight: (state) => {
      state.data = null;
    },
  },
});

export const { checkFlights, RemoveFlight } = FlightData.actions;

export const SelectedData = (state) => state.data.data;

export default FlightData.reducer;
