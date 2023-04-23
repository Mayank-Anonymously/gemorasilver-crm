import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  isLoading: false,
  userId: "",
  username: "",
  password: "",
};

const Login = createSlice({
  name: "topup",
  initialState,
  reducers: {
    SignIn(state, action) {
      state.value = action;
    },
    SignOut(state, action) {
      state.value = action.payload;
    },
    // walletBalance(state, action) {
    //   state.isLoading = false;
    //   state.userId = action.payload;
    // },
  },
});

export const { SignIn, creditBalance } = Login.actions;
export default Login.reducer;

// export function getWalletBalance() {
//   return async (dispatch) => {
//     try {
//       const wallletApiResponse = await axios.post('')
//     }
//   }
// }
