import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    recieveUsers(state, action) {
      state.users = action.payload.users;
      console.log(state.users);
    },
    answeredQuestion(state, action) {
      console.log(state.users);
      // const { authedUser, qid, answer } = action.payload;
      // state.users = {
      //   ...state.users,
      //   [authedUser]: {
      //     ...state.users[authedUser],
      //     answers: {...state.users[authedUser].answer, [qid]: answer },
      //   },
      // };

    },
    createdQuetion(state, action) {},
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice;
