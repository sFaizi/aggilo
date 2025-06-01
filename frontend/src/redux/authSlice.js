import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const userExists = state.users.some(
        (user) =>
          user.name === action.payload.name &&
          user.email === action.payload.email
      );

      if (userExists) {
        state.error = "User already exists";
        state.isAuthenticated = false;
        state.user = null;
      } else {
        state.users.push(action.payload);
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      }
    },

    login: (state, action) => {
      const user = state.users.find(
        (user) =>
          user.name === action.payload.name &&
          user.password === action.payload.password
      );

      if (user) {
        state.isAuthenticated = true;
        state.user = user;
        state.error = null;
      } else {
        state.error = "Invalid user";
        state.isAuthenticated = false;
        state.user = null;
      }
    },

    logout: (state) => {
      state.error = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
