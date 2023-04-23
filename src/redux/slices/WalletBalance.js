import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { value: 0, isLoading: false, userId: "" };

const TOPPUP = createSlice({
  name: "topup",
  initialState,
  reducers: {
    addBalance(state, action) {
      state.value = action;
    },
    creditBalance(state, action) {
      state.value = action.payload;
    },
    walletBalance(state, action) {
      state.isLoading = false;
      state.userId = action.payload;
    },
  },
});

export const { addBalance, creditBalance } = TOPPUP.actions;
export default TOPPUP.reducer;

// export function getWalletBalance() {
//   return async (dispatch) => {
//     try {
//       const wallletApiResponse = await axios.post('')
//     }
//   }
// }
