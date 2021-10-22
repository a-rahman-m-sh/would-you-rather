import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    recieveUsers(state, action) {
      state.users = action.payload.users;
    },
    answeredQuestion(state, action) {
      const { authedUser, qid, answer } = action.payload;
      state.users = {
        ...state.users,
        [authedUser]: {
          ...state.users[authedUser],
          answers: { ...state.users[authedUser].answers, [qid]: answer },
        },
      };
    },
    addedQuestion(state, action) {
      const { authedUser, qid } = action.payload;

      state.users = {
        ...state.users,
        [authedUser]: {
          ...state.users[authedUser],
          questions: [...state.users[authedUser].questions, qid],
        },
      };
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice;
