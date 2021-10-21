import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users-slice";
import questionsSlice from "./questions-slice";
import authUserSlice from "./authUser-slice";

const store = configureStore({
  reducer: { users: usersSlice.reducer, questions: questionsSlice.reducer, authUser:authUserSlice.reducer },
});

export default store;
