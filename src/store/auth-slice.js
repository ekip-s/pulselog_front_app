import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authInit(state, actions) {
      state.authenticated = actions.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
