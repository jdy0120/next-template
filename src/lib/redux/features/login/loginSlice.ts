import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface LoginState {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (
      state,
      action: PayloadAction<Omit<LoginState, "isLoggedIn">>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;

export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
